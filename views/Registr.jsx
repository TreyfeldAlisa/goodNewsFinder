const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function Reg() {
  return (
    <Layout>
      <NavBar />
      <form
        name="registration"
        className="text-c center formReg"
        method="POST"
        action="/auth/reg"
      >
        <label htmlFor="login">
          Введите логин <input required name="login" type="text" />
        </label>
        <label htmlFor="email">
          Введите e-mail <input required name="email" type="email" />
        </label>
        <label htmlFor="password">
          Введите пароль
          <input required minLength={8} name="password" type="password" />
        </label>
        <button className="btn btn-register" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
