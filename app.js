require('dotenv').config();
require('@babel/register');

const express = require('express');
const config = require('./config/config');

const PORT = process.env.PORT ?? 3000;

// импортировать роутеры
const apiRouter = require('./routes/API');
const authViewsRouter = require('./public/JS/authViews');

const app = express();

config(app);

// подключить роутеры
app.use('/', authViewsRouter);
app.use('/news', apiRouter);

app.listen(PORT, () => {
  console.log('Вологодский ОМОН работает на', PORT);
});
