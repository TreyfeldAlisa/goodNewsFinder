const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <NavBar />
      <form
        name="login"
        className="text-c center"
        method="POST"
        action="/login"
      >
        <label htmlFor="email">email</label>
        <br />
        <input type="email" name="email" placeholder="введите email" />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" name="password" placeholder="введите password" />
        <br />
        <button type="submit" className="button">
          log in!
        </button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
