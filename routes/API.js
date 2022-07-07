const axios = require('axios');
const apiRouter = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const News = require('../views/News');

apiRouter.get('/', async (req, res) => {
  try {
    const newsT = React.createElement(News, {});
    const html = ReactDOMServer.renderToStaticMarkup(newsT);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (error) {
    console.error(error.message);
  }
});

apiRouter.post('/', async (req, res) => {
  const { search, filter } = req.body;
  try {
    const news = await axios.get(
      encodeURI(
        `https://newsapi.org/v2/everything?q=${search}&language=ru&apiKey=c01b68ba03054f62a9ffe381cb93d6c5`
      )
    );
    if (filter) {
      const filterNews = news.data.articles.filter(
        (el) =>
          !el.title.toUpperCase().includes(filter.toUpperCase()) ||
          !el.description.toUpperCase().includes(filter.toUpperCase())
      );

      const newsT = React.createElement(News, { novosti: filterNews });
      const html = ReactDOMServer.renderToStaticMarkup(newsT);
      res.write('<!DOCTYPE html>');
      return res.end(html);
    }
    const newsT = React.createElement(News, { novosti: news.data.articles });
    const html = ReactDOMServer.renderToStaticMarkup(newsT);
    res.write('<!DOCTYPE html>');
    return res.end(html);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = apiRouter;
