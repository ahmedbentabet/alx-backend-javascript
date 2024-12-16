const express = require('express');

const server = express();

server.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

server.listen(1245);

module.exports = server;
