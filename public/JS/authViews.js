const viewsRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('../../views/Home');
const { User } = require('../../db/models');

viewsRouter.get('/', async (req, res) => {
  try {
    const user = res.locals.user;
    if (user) {
      const home = React.createElement(Home, { user });
      const html = ReactDOMServer.renderToStaticMarkup(home);
      res.write('<!doctype html>');
      res.write(html);
      return res.end();
    }
    const home = React.createElement(Home, {});
    const html = ReactDOMServer.renderToStaticMarkup(home);
    res.write('<!doctype html>');
    res.write(html);
    return res.end();
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
});

module.exports = viewsRouter;
