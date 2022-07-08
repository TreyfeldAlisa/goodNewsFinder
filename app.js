require('dotenv').config();
require('@babel/register');

const express = require('express');
const config = require('./config/config');

const PORT = process.env.PORT ?? 3000;

// импортировать роутеры
const apiRouter = require('./routes/API');
// const authViewsRouter = require('./public/JS/authViews');
const authRouter = require('./routes/auth');
const homeRouter = require('./public/JS/authViews')

const app = express();

config(app);

// подключить роутеры
app.use('/', homeRouter);
// app.get('/', (req, res) => {
//     res.redirect('/auth')
// })
app.use('/news', apiRouter);
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log('Вологодский ОМОН работает на', PORT);
});
