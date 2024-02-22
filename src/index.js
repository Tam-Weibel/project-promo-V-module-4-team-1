const express = require("express");
const cors = require("cors");
const mysql = require('mysql2/promise');

const server = express();
server.use(cors())
const port = 5001;
server.use(express.json()) //esta linea no estaba y no llegaban los datos del body
async function getDB (){
    const dataBase = await mysql.createConnection({
        host: 'sql.freedb.tech',
        user: 'freedb_Diany0121',
        password: 'V7#FvR4*EZjUJva',
        database: 'freedb_cookieproject',
    });
    await dataBase.connect();
    return dataBase;
};

server.listen(port, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto ${port}`)
});

server.get('/getprojects', async (req, res) => {
    const conex = await getDB();
    const sql = 'SELECT * FROM project, author where author.id = project.author_id';
    const [results, fields] = await conex.query(sql);
    console.log(results);
    console.log(fields);

    conex.end();
    res.json({success: true, data: results});
})
server.post('/addProject', async (req, res) => {
    const conex = await getDB();
    const insertAuthor = 'INSERT INTO author (nameAut, job, photo) values (?,?,?)'; //las comillas q metimos en las ? no hacian falta por mucho que las quiera el workbench
    const [resultAuthor] = await conex.query(insertAuthor, [
        req.body.autor,
        req.body.job,
        req.body.photo
    ]);
    const lastInsertAuthor = resultAuthor.insertId;

    const insertProject = 'INSERT INTO project (namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, author_id) values (?,?,?,?,?,?,?,?)'; //author_id tiene q ir al final para estar igual que lastInsertAuthor
    const [resultProject] = await conex.query(insertProject, [
        req.body.name,
        req.body.desc,
        req.body.technologies,
        req.body.image,
        req.body.repo,
        req.body.demo,
        req.body.slogan,
        lastInsertAuthor //quitamos la de authorId ya q es esta la buena
    ]);
    conex.end();
    res.json({
        success: true,
        cardLink: `http://localhost/detail/${resultProject.insertId}`
    })
});

const staticServer = "./web/dist";
server.use(express.static(staticServer));