const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout title="Login">
      <h1>
        Авторизация
      </h1>
      <form name="login">
        <label htmlFor="inputemail">Email:</label>
        <input type="email" name="inputemail" placeholder="введите email" />
        <br />
        <label htmlFor="inputpassword">Пароль:</label>
        <input type="password" name="inputpassword" placeholder="введите password" />
        <br />
        <button type="submit">Авторизоваться</button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
