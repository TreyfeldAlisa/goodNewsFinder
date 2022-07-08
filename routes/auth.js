const authRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Login = require('../views/Login');
const Registr = require('../views/Registr');

authRouter.get('/reg', (req, res) => {
  const reg = React.createElement(Registr);
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.write('<!doctype html>');
  res.end(html);
});

authRouter.post('/reg', async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ registration: false });
      return;
    }
    const userNew = await User.create({
      login,
      email,
      password: await bcrypt.hash(password, 10),
    });
    const newUser = {
      id: userNew.id,
      email: userNew.email,
    };
    req.session.userId = newUser;
    res.json({ registration: true });
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

authRouter.get('/log', async (req, res) => {
  const log = React.createElement(Login, {});
  const html = ReactDOMServer.renderToStaticMarkup(log);
  res.write('<!doctype html>');
  res.end(html);
});

authRouter.post('/log', async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ where: { email } });
    if (!checkUser) {
      res.json({ login: false });
      return;
    }
    const passCheck = await bcrypt.compare(password, checkUser.password);
    if (passCheck) {
      const newUser = {
        id: checkUser.id,
        email: checkUser.email,
      };
      req.session.userId = newUser;
      res.json({ login: true });
      return;
    }
    return res.json({ login: false });
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = authRouter;

// authRouter.post('/reg', async (req, res) => {
//   try {
//     const { login, pass, email } = req.body;
//     const user = await User.findOne({
//       where: {
//         email,
//       },
//     });
//     if (user) {
//       res.json({ status: false });
//       return;
//     }
//     const hash = await bcrypt.hash(pass, 10);
//     await User.create({
//       login,
//       password: hash,
//       email,
//     });
//     res.json({ status: 'db ok' });
//   } catch (error) {
//     res.status(500).json({ errorMessage: 'Ooooops' });
//   }
// });

// authRouter.get('/login', (req, res) => {
//   res.renderComponent(Login);
// });

// authRouter.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({
//       where: {
//         email,
//       },
//     });
//     if (!user) {
//       res.json({ status: false, errorMessage: 'Такого пользователя не существует' });
//       return;
//     }
//     const authOk = bcrypt.compare(password, user.password);
//     if (!authOk) {
//       res.json({ status: false, errorMessage: 'Неверный пароль!' });
//       return;
//     }
//     req.session.user = user;
//     res.json({ status: true });
//   } catch (error) {
//     res.status(500).json({ errorMessage: error.message });
//   }
// });

// authRouter.get('/logout', async (req, res) => {
//   req.session.destroy();
//   res.clearCookie('user_sid');
//   res.redirect('/');
// });

// module.exports = authRouter;
