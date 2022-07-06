require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./view/Home');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  const home = React.createElement(Home);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.end(html);
});

app.listen(PORT, () => {
  console.log('Вологодский ОМОН работает на', PORT);
});
