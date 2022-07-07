require('dotenv').config();
require('@babel/register');

const express = require('express');
const config = require('./config/config');

const PORT = process.env.PORT ?? 3000;

// импортировать роутеры
const apiRouter = require('./routes/API');

const viewsRouter = require('./public/js/authViews');

const app = express();

config(app);

// подключить роутеры

app.use('/', viewsRouter);
app.use('/news', apiRouter);

app.listen(PORT, () => {
  console.log('Вологодский ОМОН работает на', PORT);
});
