const express = require("express");
const cors = require("cors");
const mysql = require('mysql2/promise');

const server = express();
require('dotenv').config();
server.use(cors())
const port = process.env.PORT || 5001;

server.use(express.json({limit: '25mb'}))
server.set("view engine", "ejs");

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
server.get('/getteam', async (req, res) => {
    const conex = await getDB();
    const sql = 'SELECT * FROM team';
    const [results, fields] = await conex.query(sql);

    conex.end();
    res.json({success: true, data: results});
})
server.get('/getprojects', async (req, res) => {
    const conex = await getDB();
    const sql = `SELECT project.id as idProject, author.id as idAuthor, namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, nameAut, job, photo
    FROM project, author where author.id = project.author_id`;
    const [results, fields] = await conex.query(sql);

    conex.end();
    res.json({success: true, data: results});
})
server.post('/addProject', async (req, res) => {
    const conex = await getDB();
    const insertAuthor = 'INSERT INTO author (nameAut, job, photo) values (?,?,?)'; 
    const [resultAuthor] = await conex.query(insertAuthor, [
        req.body.nameAut,
        req.body.job,
        req.body.photo
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
        cardURL: `http://localhost:5001/detail/${resultProject.insertId}`
    });
});

server.get('/detail/:id', async(req,res)=> {
    const { id } = req.params;
    const selectProjectId = `SELECT project.id as idProject, author.id as idAuthor, namePj, descriptionPj, technologies, image, gitUrl, demoUrl, slogan, nameAut, job, photo
    FROM project, author where author.id = project.author_id and project.id = ?`;
    const conex = await getDB();
    const [resultProject] = await conex.query(selectProjectId, [id]);

    conex.end();

    res.render('detail', { project: resultProject[0]});
});


const staticServer = "./web/dist";
server.use(express.static(staticServer));
const staticServerCss = "./src/public-css";
server.use(express.static(staticServerCss));
const staticServerImages = "./src/public-image";
server.use(express.static(staticServerImages));
const staticServerJs = "./src/public-js";
server.use(express.static(staticServerJs));
