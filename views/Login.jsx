const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <NavBar />

      <form
        name="login"
        className="text-c center formLog"
        method="POST"
        action="/auth/log"
      >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="Введите почту"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            placeholder="Введите пароль"
            className="password form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-register">
          Авторизироваться
        </button>
      </form>
      <div className="errorDivLog" />
    </Layout>
  );
};
