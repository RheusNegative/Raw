const express = require('express')
const server = express()
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';


server.set('view engine', 'ejs')
server.use(webpackMiddleware(webpack(webpackConfig)));

server.get('/', function (req, res) {
  res.render('index', {content: "Hi"})
})

server.listen(3000, () => console.log('Example server listening on port 3000!'))
