const React = require('react');

module.exports = function NavBar({ user }) {
  return (
    <nav className="clearfix mar-b-1">
      <ul className="no-bullets no-margin no-padding right">
        {user ? (
          <li className="pipe-separate t-light-green left">
            Hi,
            {' '}
            {user.login}
          </li>
        )
          : (<li className="pipe-separate t-light-green left"><a href="/reg">register</a></li>)}
        {user ? (<li className="pipe-separate t-light-green left"><a href="/new/logout">logout</a></li>)
          : (<li className="pipe-separate t-light-green left"><a href="/login">login</a></li>) }
        <li className="pipe-separate t-light-green left"><a href="/">home</a></li>
      </ul>
    </nav>
  );
};
