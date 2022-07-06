const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {

  return (
    <Layout title="Login">
         <h1>Впервые тут?</h1>
      <form name="auth">
      
        <label htmlFor="">Регистрируйся</label>
        <button type="submit">Рега</button>
      </form>
      <form name="login">
    
        <label htmlFor="inputpassword">Авторизируйся</label>
        <button type="submit">Автор</button>
      </form>
      <div className="errorMessage">
      </div>
    </Layout>
  );
}
