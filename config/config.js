const express = require('express');
const logger = require('morgan');

const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const ReactSsr = require('../middleware/reactSsr');

const isAuth = require('../middleware/isAuth');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? '234567yhbv',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

const config = (app) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(logger('dev'));
//   app.use(ReactSsr);
  app.use(isAuth);
  app.use(logger('dev'));
};

module.exports = config;
