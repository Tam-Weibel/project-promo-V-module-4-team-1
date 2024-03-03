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

  const insertProject =
    'INSERT INTO project (namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, author_id) values (?,?,?,?,?,?,?,?)';
  const [resultProject] = await conex.query(insertProject, [
    req.body.namePj,
    req.body.descriptionPj,
    req.body.technologies,
    req.body.image,
    req.body.gitUrl,
    req.body.demoUrl,
    req.body.slogan,
    lastInsertAuthor,
  ]);
  conex.end();
  res.json({
    success: true,
    cardURL: `http://localhost:5001/detail/${resultProject.insertId}`,
  });
});

server.get('/detail/:id', async (req, res) => {
  const { id } = req.params;
  const selectProjectId = `SELECT project.id as idProject, author.id as idAuthor, namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, nameAut, job, photo
    FROM project, author where author.id = project.author_id and project.id = ?`;
  const conex = await getDB();
  const [resultProject] = await conex.query(selectProjectId, [id]);

  conex.end();

  res.render('detail', {
    project: resultProject[0],
    cardURL: `http://localhost:5001/detail/${id}`,
  });
});

const staticServer = './web/dist';
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
  try {
    const password = req.body.userpassword;
    const passwordHash = await bcrypt.hash(password, 10);
    const email = req.body.email;
    const conex = await getDB();
    const userExistsQuery = 'SELECT * FROM users WHERE email = ?';
    const [registeredEmail] = await conex.query(userExistsQuery, [email]);

    console.log(registeredEmail);

    if (registeredEmail.length > 0 && registeredEmail[0].email === email) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un usuario con ese email. Por favor compruebe los datos introducidos.',
      });
    } else {
      let resultUser = {
        username: req.body.username,
        email: req.body.email,
        userpassword: passwordHash,
      };

      const insertUserQuery =
        'INSERT INTO users (username, email, userpassword) VALUES (?, ?, ?)';

      jwt.sign(resultUser, 'secret_key', async (err, token) => {
        if (err) {
          res.status(400).send({
            success: false,
            message: 'Error del sistema. Por favor, introduzca de nuevo los datos.',
          });
        } else {
          try {
            // Move user creation logic inside the else block
            const [results] = await conex.query(insertUserQuery, [
              resultUser.username,
              resultUser.email,
              resultUser.userpassword,
            ]);

            conex.end();

            res.json({
              success: true,
              message: 'Tu usuari@ ha sido creado correctamente!',
              token: token,
              id: results.insertId,
            });
          } catch (error) {
            res.status(500).json({
              success: false,
              message: 'Error del sistema. Por favor, introduzca de nuevo los datos.',
              error: error.message,
            });
          }
        }
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error del sistema. Por favor, introduzca de nuevo los datos.',
      error: error.message,
    });
  }
});


server.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const sql = `SELECT * FROM users WHERE email= ?`;
    const connection = await getDB();

    const [users] = await connection.query(sql, [body.email]);
    connection.end();

    const user = users[0];

    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.userpassword, user.userpassword);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    const userForToken = {
      email: user.email,
      id: user.id,
    };
    const token = generateToken(userForToken);
    res.status(200).json({
      success: true,
      message: 'Log in successful',
      token: token,
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal error server at login',
      error: error.message,
    });
  }
});

server.get('/profile', authenticateToken, async (req, res) => {
  try {
    let sql = `SELECT * FROM users WHERE email= ?`;
    const connect = await getDB();
    const [profile] = await connect.query(sql, [req.user.email]);
    connect.end();

    console.log(profile);
    res.json({ message: 'Profile accesible', profile: profile[0] });
  } catch {
    return res.status(500).json({
      message: 'Internal error server at get to profile',
      error: error.message,
    });
  }
});

server.put('/logout', async (req, res) => {
  const authHeader = req.headers['authorization'];
  jwt.sign(authHeader, '', { expiresIn: 1 }, (logout, error) => {
    if (logout) {
      res.status(200).json({
        message: 'You have been disconnected',
        error: error,
      });
    } else {
      res.send({ message: 'Error' });
    }
  });
});
