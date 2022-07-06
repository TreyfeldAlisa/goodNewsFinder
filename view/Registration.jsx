const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {

  return (
    <Layout title="Registration">
      <h1>
        Регистрация
      </h1>
      <form name="registration">
        <label htmlFor="inputemail">Email:</label>
        <input type="email" name="inputemail" placeholder='введите email' /><br/>
        <label htmlFor="inputpassword">Пароль:</label>
        <input type="password" name="inputpassword" placeholder='введите password' /><br/>
        <button type="submit">Register me!</button>
      </form>
      <div className="errorMessage"></div>
    </Layout>
  );
}
