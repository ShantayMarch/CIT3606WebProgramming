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

app.post('/submit', function(req, res){
  const sql = 'SELECT * FROM students WHERE lastname = ?';
  console.log("Form contents: " + req.body.lastname);
  conn.query(sql, [req.body.lastname], function (err, result) {
    if (err) throw err;
    if (result.length == 0)  { res.send("no result"); }
    else {  console.log(result);
               //res.send(result);

               resultStr = "" 
for (i = 0; i < result.length; i++) {
      resultStr += result[i].firstname +  " " + 
                           result[i].lastname + "<br>"  ;
   }
 res.send(resultStr);

   }  }  );
});    

app.get('/new', function(req, res){
   res.sendFile(__dirname + "/new.html");
});


app.post('/insert', function(req, res){
  const sql = 'INSERT INTO USERS (email, username, password) VALUES (?, ?, ?)';
  conn.query(sql, [req.body.email, req.body.username, req.body.password], function (err, result) {
    if(err)throw err;

    res.send('<h1>New user added</h1>');
  });
});

app.get('/forgot', function(req, res){
   res.sendFile(__dirname + "/forgot.html");
});

app.post('/retrieve', function(req, res){
  const sql = 'SELECT password FROM USERS WHERE email = ?';
  conn.query(sql, [req.body.email], function (err, result) {
    if(err)throw err;
     if (result.length == 0)  { res.send("no result"); }
    else {  console.log(result);
        res.send("Password: " + result[0].password);
    }
  });
});


app.listen(8080);
