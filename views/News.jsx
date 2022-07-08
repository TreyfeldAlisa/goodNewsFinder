const React = require('react');
const Navbar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function News({ novosti = [], user, words = [] }) {
  return (
    <Layout>
      <Navbar user={user} />
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
        <form className="PWform">
          <div className="PWdiv">
            {words.map((el) => (
              <td
                key={`${el.word}`}
                className="PW"
              >
                {' '}
                #{el.word}

              </td>
            ))}
          </div>
        </form>
        <div className="container">
          {novosti.length ? (
            novosti.map((novost) => (
              <div
                key={`${novost.title}1`}
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
                  <p className="card-text card-data">
                    {new Date(novost.publishedAt).toLocaleString('ru', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      timezone: 'UTC',
                    })}
                  </p>
                  <a href={novost.url} target="_blank" className="linkNews" rel="noreferrer">
                    Читать источник
                  </a>
                </div>
              </div>
            ))
          ) : (
            <img
              src="https://1ps.ru/files/blog/2021/instruction-google-adv/5-gugl_sledit_za_toboj.jpg"
              alt="google"
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
