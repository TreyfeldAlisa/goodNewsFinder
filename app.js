require('dotenv').config();
require('@babel/register');

const express = require('express');
const config = require('./config/config');

const PORT = process.env.PORT ?? 3000;

// импортировать роутеры
const authRouter = require('./routes/auth');

const app = express();

config(app);

// подключить роутеры
app.use('/', authRouter);
app.use('/reg', authRouter);
app.use('/login', authRouter);
app.use('/logout', authRouter);

app.listen(PORT, () => {
  console.log('Вологодский ОМОН работает на', PORT);
});
