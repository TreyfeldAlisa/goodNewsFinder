const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

module.exports = function Main() {
  return (
    <Layout>
      <NavBar user={user}/>
    </Layout>
  );
};
