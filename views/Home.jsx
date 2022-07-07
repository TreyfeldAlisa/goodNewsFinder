const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <NavBar />
      <div>
        <h1>Хорошие Новости ;)</h1>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" href="/reg">
          Registration
        </button>
        <button className="btn btn-primary" type="button" href="/login">
          Login
        </button>
      </div>
    </Layout>
  );
};
