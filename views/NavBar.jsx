const React = require('react');

module.exports = function NavBar({ user }) {
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
            <a className="navbar-brand" href="/">
              Home
            </a>
            {user && (
              <a className="navbar-brand" href="/news">
                Good News
              </a>
            )}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 apiNews">
              {!user ? (
                <>
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
                    <a className="nav-link" href="/auth/log">
                      Авторизация
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/profile"
                    >
                      Профиль
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/logout">
                      Выйти
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
