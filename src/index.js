const express = require("express");
const cors = require("cors");
const mysql = require('mysql2/promise');

const server = express();
server.use(cors())
const port = 5001;

async function getDB (){
    const dataBase = await mysql.createConnection({
        host: 'sql.freedb.tech',
        user: 'freedb_Diany0121',
        password: 'V7#FvR4*EZjUJva',
        database: 'freedb_cookieproject',
    });
    dataBase.connect();
    return dataBase;
}

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

const staticServer = "./web/dist";
server.use(express.static(staticServer));