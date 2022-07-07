const React = require('react');
const Layout = require('./Layout');

module.exports = function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Good News
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 apiNews">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/auth/reg"
                >
                  Регистрация
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="auth/log">
                  Авторизация
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
