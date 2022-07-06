const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <h1>Впервые тут?</h1>
      <form name="reg">
        <label>
          {' '}
          <a href="/registr">Регистрируйся</a>
        </label>

      </form>
      <form name="auth">
        <label>
          {' '}
          <a href="/auth">Авторизируйся</a>

        </label>

        {/* <button type="submit">Автор</button> */}

      </form>
    </Layout>
  );
};
