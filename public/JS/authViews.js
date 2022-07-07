const viewsRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Registration = require('../../views/Registrations');
const Login = require('../../views/Login');
const Home = require('../../views/Home');

viewsRouter.get('/reg', (req, res) => {
  const regForm = React.createElement(Registration);
  const html = ReactDOMServer.renderToStaticMarkup(regForm);
  res.write('<!doctype html>');
  res.write(html);
  res.end();
});
viewsRouter.get('/login', (req, res) => {
  const loginForm = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(loginForm);
  res.write('<!doctype html>');
  res.write(html);
  res.end();
});
viewsRouter.get('/', (req, res) => {
  const home = React.createElement(Home);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!doctype html>');
  res.write(html);
  res.end();
});


module.exports = viewsRouter;
