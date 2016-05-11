'use strict';
var http = require('http'),
fs = require('fs'),
mime = require('mime'),
path = require('path'),
headers = {},
json = require('../server/db/users.json'),
contentType;

function start() {
    function onRequest(request, response) {
        var  pathname,
        body,
        dir, 
        id;

        dir = '../client';

        pathname = request.url;

        if  (pathname === ('/')) {
            pathname = '/index.html';        
        }

        if (pathname === ('/users.json')) {
            dir = '../server';
            pathname = '/db/users.json';
        }

        fs.readFile(dir + pathname , 'binary', function (err, data) {
            contentType = mime.lookup(path.extname(pathname));
            if (contentType) {
                headers["Content-Type"] = contentType;
            }

            if (err) {
                response.writeHead(500);
                response.end();
            } else {
                response.writeHead(200, headers);
                response.write(data, 'binary');
            }
            response.end();
        });  

        if (request.method === 'DELETE') {
            dir = '../server';
            id = Number(pathname.substr(pathname.lastIndexOf('/') + 1));
            json.forEach(function(user) {
                if (user.id === id) {
                    json.splice(user.id, 1);
                    fs.writeFile(dir + '/db/users.json', JSON.stringify(json, null, ' '), onErrorHandler);
                }  
            });

            response.end(JSON.stringify(json, null, ' ')); 
        }  
                
        if ( pathname === ('/users')  && request.method === 'POST') {
            dir = '../server';

            id = Number(pathname.substr(pathname.lastIndexOf('/') + 1));
            body = [];

            request.on('data', function(chunk) {
                body.push(chunk);   
            }).on('end', function() {
                body = Buffer.concat(body).toString();
                json.push(JSON.parse(body)); 
                fs.writeFile(dir + '/db/users.json', JSON.stringify(json, null, ' '), onErrorHandler);
            });
            response.end(JSON.stringify(json, null, ' '));
        }

        if (request.method === 'PUT') {
            dir = '../server';
            id = Number(pathname.substr(pathname.lastIndexOf('/') + 1));
            body = [];
            request.on('data', function(chunk) {
                body.push(chunk);   
            }).on('end', function() {
                body = Buffer.concat(body).toString();
                              
                json.forEach(function(user) {
                    if (user.id === id) {
                        user === null;
                        json.splice(user.id, 1, JSON.parse(body));
                        fs.writeFile(dir + '/db/users.json', JSON.stringify(json, null, ' '), onErrorHandler);
                    } 
                    response.end(JSON.stringify(json, null, ' ')); 
                }); 
            });
        }

        (function setId () {
            var num = 0;
            json.forEach (function (user) {
            user.id = num++;
            fs.writeFile('../server/db/users.json', JSON.stringify(json, null, ' '), onErrorHandler);
            });
        })();

        function onErrorHandler (error) {
            if (error) {
                console.log(error);
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
            }
        }
    }

    http.createServer(onRequest).listen(3000);
    console.log("Server has started.");
}

exports.start = start();


