const chai = require('chai');
const express = require('express');
const bodyParser = require('body-parser');

const expect = chai.expect;

const server = express();
server.use(bodyParser.json());


server.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
});

server.get('/user/:id', (req, res) => {
  res.end(JSON.stringify({
    id: 1,
    name: 'God'
  }));
});

server.listen(8081, () => {
  console.log('User Service listening on http://localhost:8081')
});

