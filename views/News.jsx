const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./NavBar');

module.exports = function News({ novosti = [] }) {
  return (
    <Layout>
      <Navbar />
      <div style={{ margin: '0 auto' }}>
        <form className="d-flex" action="/news" method="POST">
          <input
            required
            className="form-control me-2"
            type="text"
            name="search"
            placeholder="Новость"
            aria-label="Search"
          />
          <input
            className="form-control me-2"
            type="text"
            name="filter"
            placeholder="Исключения"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Найти
          </button>
        </form>
        <div className="container">
          {novosti.length ? (
            novosti.map((novost) => (
              <div
                key={novost.title + '1'}
                className="card"
                style={{ width: '18rem' }}
              >
                <img
                  src={novost.urlToImage}
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <h5 className="card-title">{novost.title}</h5>
                  <p className="card-text">{novost.description}</p>
                  <p className="card-text">{novost.publishedAt}</p>
                  <a
                    href={novost.url}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Читать
                  </a>
                </div>
              </div>
            ))
          ) : (
            <h1>Новостей нет</h1>
          )}
        </div>
      </div>
    </Layout>
  );
};
