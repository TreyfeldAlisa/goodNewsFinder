const React = require('react');
const Layout = require('./Layout');

module.exports = function News({ novosti = [] }) {
  return (
    <Layout>
      <div style={{ margin: '0 auto' }}>
        <form className="w-25" action="/news" method="POST">
          <div className="mb-3">
            <input
              type="text"
              name="search"
              placeholder="Новость"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="filter"
              placeholder="Исключения"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Найти
          </button>
        </form>
        {novosti.length ? (
          novosti.map((novost) => (
            <div key={novost.title + '1'}>
              <h3>{novost.title}</h3>
              <p>{novost.description}</p>
              <img src={novost.urlToImage} alt="img" />
              <p>{novost.publishedAt}</p>
              <a href={novost.url} target="_blank">
                Читать
              </a>
            </div>
          ))
        ) : (
          <h1>Новостей нет</h1>
        )}
      </div>
    </Layout>
  );
};
