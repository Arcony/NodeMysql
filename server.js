const express = require ('express');
const mysql= require('mysql')
const bodyParser = require('body-parser');

const app = express();

const db = mysql.createConnection({
      "user": "root",
      "password": "@Nwp159753",
      "host": "localhost",
      "database": "nodemysql"
    });

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql connected');
})

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('database created');
    })
})

app.get('/createposttable', (req, res) =>{
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id) )';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post crated')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))
require('./app/routes')(app, {});
app.listen("8080", () => {
    console.log("We're LIVE BITCHES 8080")
})