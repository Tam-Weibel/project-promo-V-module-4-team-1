const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const server = express();
require('dotenv').config();
server.use(cors());
const port = process.env.PORT || 5001;

server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

async function getDB() {
  const dataBase = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_Diany0121',
    password: 'V7#FvR4*EZjUJva',
    database: 'freedb_cookieproject',
  });
  await dataBase.connect();
  return dataBase;
}

server.listen(port, () => {
  console.log(`El servidor se esta ejecutando en el puerto ${port}`);
});
server.get('/getteam', async (req, res) => {
  const conex = await getDB();
  const sql = 'SELECT * FROM team';
  const [results, fields] = await conex.query(sql);

  conex.end();
  res.json({ success: true, data: results });
});
server.get('/getprojects', async (req, res) => {
  const conex = await getDB();
  const sql = `SELECT project.id as idProject, author.id as idAuthor, namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, nameAut, job, photo
    FROM project, author where author.id = project.author_id`;
  const [results, fields] = await conex.query(sql);

  conex.end();
  res.json({ success: true, data: results });
});
server.post('/addProject', async (req, res) => {
  const conex = await getDB();
  const insertAuthor =
    'INSERT INTO author (nameAut, job, photo) values (?,?,?)';
  const [resultAuthor] = await conex.query(insertAuthor, [
    req.body.nameAut,
    req.body.job,
    req.body.photo,
  ]);
  const lastInsertAuthor = resultAuthor.insertId;

    const insertProject = 'INSERT INTO project (namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, author_id) values (?,?,?,?,?,?,?,?)';
    const [resultProject] = await conex.query(insertProject, [
        req.body.namePj,
        req.body.descriptionPj,
        req.body.technologies,
        req.body.image,
        req.body.gitUrl,
        req.body.demoUrl,
        req.body.slogan,
        lastInsertAuthor
    ]);
    conex.end();
    res.json({
        success: true,
        cardURL: `https://project-promo-v-module-4-team-1.onrender.com/detail/${resultProject.insertId}`
    });
});

server.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  const selectProjectId = `SELECT project.id as idProject, author.id as idAuthor, namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, nameAut, job, photo
    FROM project, author where author.id = project.author_id and project.id = ?`;
  const conex = await getDB();
  const [resultProject] = await conex.query(selectProjectId, [id]);

  conex.end();

  res.render('detail', { project: resultProject[0] });
});


const staticServer = "./src/public-react";
server.use(express.static(staticServer));
const staticServerCss = './src/public-css';
server.use(express.static(staticServerCss));
const staticServerImages = './src/public-image';
server.use(express.static(staticServerImages));
const staticServerJs = './src/public-js';
server.use(express.static(staticServerJs));

//SIGN IN AND LOG IN
const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secret_key');
  return token;
};
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'secret_key');
    return decoded;
  } catch (err) {
    return null;
  }
};
//Middelware de autenticación
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  req.user = decoded;
  next();
};

// Ruta protegida
server.get('/ruta-protegida', authenticateToken, (req, res) => {
  // Acceso autorizado, se puede acceder al objeto `req.user` que contiene los datos decodificados del token
  res.json({ message: 'Acceso autorizado', user: req.user });
});

//  Crear endpoints -->
server.post('/register', async (req, res) => {
  const password = req.body.userpassword;
  console.log(password);
  console.log(req.body.password);
  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);
  let resultUser = {
    username: req.body.username,
    email: req.body.email,
    userpassword: passwordHash,
  };

  console.log(req.body);

  const sql =
    'INSERT INTO users (username, email, userpassword) values ( ?, ?, ?)';

  jwt.sign(resultUser, 'secret_key', async (err, token) => {
    if (err) {
      res.status(400).send({ msg: 'Error' });
    } else {
      const conex = await getDB();
      const [results] = await conex.query(sql, [
        resultUser.username,
        resultUser.email,
        resultUser.userpassword,
      ]);
      conex.end();
      //Si todo sale bien, se envía una respuesta JSON con un mensaje de éxito, el token JWT y el insertId,
      //que es el ID del usuario recién insertado en la base de datos.
      res.json({ msg: 'success', token: token, id: results.insertId });
    }
  });
});

server.post('/login', async (request, response) => {
  //recibe el cuerpo de la solicitud, que debería contener el nombre de usuario y la contraseña.
  const body = request.body;
  console.log(request.body);
  //Buscar si el usuario existe en la bases de datos
  const sql = `SELECT * FROM users WHERE email= ?`;
  const connection = await getDB();
  console.log(body.email);
  const [users, fields] = await connection.query(sql, [body.email]);
  console.log(users);
  connection.end();
  const user = users[0];
  console.log(user);

  //Comprueba si el usuario existe y si la contraseña proporcionada es correcta utilizando bcrypt.compare.
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.userpassword, user.userpassword);

  //Si el usuario no existe o la contraseña es incorrecta, responde con un estado 401 y un mensaje de error.
  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'Credenciales inválidas',
    });
  }

  //Si las credenciales son correctas, se prepara un objeto userForToken que incluye el username y el id del usuario.
  const userForToken = {
    email: user.email,
    id: user.id,
  };

  //Crear el token para enviar al front
  const token = generateToken(userForToken);

  //Finalmente, si todo es correcto, la función responde con un estado 200 y envía un objeto JSON con el token, el nombre de usuario y el nombre real del usuario.
  response.status(200).json({ token, email: user.email });
});
server.get('/profile', authenticateToken, async (req, res) => {
  let sql = `SELECT * FROM users WHERE email= ?`;
  const connect = await getDB();
  const [profile] = await connect.query(sql, [req.user.email]);
  connect.end();
  const response = {
    profile: profile,
  };
  res.json(response);
});
