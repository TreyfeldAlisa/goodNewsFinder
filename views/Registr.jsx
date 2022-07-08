const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function Reg() {
  return (
    <Layout >
      <NavBar />
      <form
        name="registration"
        className="text-c center formReg"
        method="POST"
        action="/auth/reg"
      >

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
            required
            name="login"
            type="text"
            placeholder="Введите логин"
            className="form-control"
          />
        </div>
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
        <button type="submit" className="btn btn-primary btn-register btn-2">
          Зарегистрироваться
        </button>
      </form>
      <div className="errorDiv" />
    </Layout>
  );
};
