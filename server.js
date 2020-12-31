/**
 * Import built-in Node.js package [express]{@link https://expressjs.com/}.
 * Express is a minimalist web Node.js framework.
 */
const express = require('express');

/**
 * Import built-in Node.js File System package [js]{@link https://nodejs.org/api/fs.html}.
 * The fs module provides an API for interacting with the file
 * system in a manner closely modeled around standard POSIX functions.
 */
const fs = require('fs');

const app = express();
const port = 3001;

/**
 * Expose script files.
 * When client browsers read the project's HTML page and process
 * a script element using a src attribute, the browsers will need to request
 * that script file. Example:
 * <script src="angular/angular.min.js">
 */
app.use(express.static(__dirname + '/node_modules'));

/**
 * Return the project's index.html file when a client
 * browser requests URI '/'.
 */
app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
});

/**
 * Define an endpoint to serve our AngularJS script file.
 * When a client browser loads the project's index.html file,
 * the broswer will process the HTML's <script> element
 * and request URI '/myApplicationController.js'.
 */
app.get('/myApplicationController.js', function(request, response) {
  fs.readFile('myApplicationController.js', function(err, data) {
    response.writeHead(200, { 'Content-Type': 'application/ecmascript' });
    response.write(data);
    response.end();
  });
});

/**
 * Define an endpoint to serve an $mdDialog service template.
 */
app.get('/view.html', function(request, response) {
  fs.readFile('view.html', function(err, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
});

/**
 * Start an express application listening to TCP port 3001.
 */
app.listen(port);