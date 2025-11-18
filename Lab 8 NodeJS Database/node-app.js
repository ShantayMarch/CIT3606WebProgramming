var http = require('http');
      //create a server object with request/response
/*http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
*/

const express = require('express');
const app = express();
app.get('/', function(req, res){
   res.send("Home page");
});
app.get('/hello', function(req, res){
   res.send("Hello world page!");
});
app.listen(8080);

