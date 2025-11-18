const express = require('express'); 
const app = express();

const mysql = require('mysql');
require('dotenv').config();               
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",

  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD

});
conn.connect((err) => {           // can move this into app.get and send
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, res){
   //res.send("Hello world!");
   const sql = 'SELECT * FROM students WHERE lastname = ?';
const lastname = "Mouse"; // or get from form input
conn.query(sql, [lastname], function (err, result) {
  if (err) throw err;
  console.log(result);
 res.send(result);
});


});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', function(req, res){
   res.sendFile(__dirname + "/form.html");
});



app.listen(8080);
