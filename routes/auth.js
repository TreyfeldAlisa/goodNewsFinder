const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Home = require('../views/Home');
const Login = require('../views/Login');
const Registrations = require('../views/Registrations');

authRouter.post('/reg', async (req, res) => {
  try {
    const { login, pass, email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      res.json({ status: false });
      return;
    }
    const hash = await bcrypt.hash(pass, 10);
    await User.create({
      login,
      password: hash,
      email,
    });
    res.json({ status: 'db ok' });
  } catch (error) {
    res.status(500).json({ errorMessage: 'Ooooops' });
  }
});

authRouter.get('/login', (req, res) => {
  res.renderComponent(Login);
});

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.json({ status: false, errorMessage: 'Такого пользователя не существует' });
      return;
    }
    const authOk = bcrypt.compare(password, user.password);
    if (!authOk) {
      res.json({ status: false, errorMessage: 'Неверный пароль!' });
      return;
    }
    req.session.user = user;
    res.json({ status: true });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

authRouter.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = authRouter;
