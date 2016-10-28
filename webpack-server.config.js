const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const compiler = webpack(config);

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(webpackDevMiddleware(compiler));

io.on('connection', (socket) => {
  console.log('connected');
})

server.listen(8080, 'localhost');