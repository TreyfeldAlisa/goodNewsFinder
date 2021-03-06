const axios = require('axios');
const apiRouter = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const { Word } = require('../db/models');

const News = require('../views/News');

apiRouter.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const words = await Word.findAll({
      raw: true,
      order: [
        ['count', 'DESC'],
      ],
      limit: 5,

    });
    console.log(words);
    const newsT = React.createElement(News, { user: user || null, words });
    const html = ReactDOMServer.renderToStaticMarkup(newsT);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (error) {
    console.error(error.message);
  }
});

apiRouter.post('/', async (req, res) => {
  const { search, filter } = req.body;
  const wordLowerCase = search.toLowerCase();
  const searchWord = await Word.findOne({ where: { word: wordLowerCase } });
  if (!searchWord) {
    await Word.create({
      word: wordLowerCase.toLowerCase(),
      count: 1,
    });
  } else {
    searchWord.count += 1;
    await searchWord.save();
  }
  try {
    const news = await axios.get(
      encodeURI(
        `https://newsapi.org/v2/everything?q=${search}&language=ru&apiKey=c01b68ba03054f62a9ffe381cb93d6c5`,
      ),
    );

    const { user } = res.locals;
    const words = await Word.findAll({
      raw: true,
      order: [
        ['count', 'DESC'],
      ],
      limit: 5,

    });

    if (filter) {
      const filterNews = news.data.articles.filter(
        (el) => !el.title.toUpperCase().includes(filter.toUpperCase())
          || !el.description.toUpperCase().includes(filter.toUpperCase()),
      );

      const newsT = React.createElement(News, {
        novosti: filterNews,

        user: user || null,
        words,

      });
      const html = ReactDOMServer.renderToStaticMarkup(newsT);
      res.write('<!DOCTYPE html>');
      return res.end(html);
    }
    const newsT = React.createElement(News, {
      novosti: news.data.articles,

      user: user || null,
      words,

    });
    const html = ReactDOMServer.renderToStaticMarkup(newsT);
    res.write('<!DOCTYPE html>');
    return res.end(html);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = apiRouter;
