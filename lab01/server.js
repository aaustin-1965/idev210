const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
});

app.listen(port);