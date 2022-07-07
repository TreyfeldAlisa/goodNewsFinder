const React = require('react');

const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <div>
        <h1>Хорошие Новости ;)</h1>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button id="regbtn" className="btn btn-primary" type="button" href="/reg">Registration</button>
        <button id="logbtn" className="btn btn-primary" type="button" href="/login">Login</button>
      </div>
    </Layout>
  );
};
