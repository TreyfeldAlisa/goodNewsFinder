const React = require('react');
const NavBar = require('./NavBar');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
console.log("🚀 ~ file: Home.jsx ~ line 6 ~ Home ~ user", user)
    
  return (
    <Layout>
      <NavBar user={user} />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://icdn.lenta.ru/images/2022/06/17/17/20220617173630845/share_9c66a91af030bbc43d2e252f421b1565.jpg"
              className="d-block w-100"
              alt="..."
              style={{ width: '100%', height: '94.5vh' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://icdn.lenta.ru/images/2022/06/09/09/20220609093437045/share_fbdd88504af3e7c3aba044dcf0960129.jpg"
              className="d-block w-100"
              alt="..."
              style={{ width: '100%', height: '94.5vh' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://icdn.lenta.ru/images/2022/07/05/11/20220705112549497/share_a70b430108bd5f9fcf45c18e8d010bb6.jpg"
              className="d-block w-100"
              alt="..."
              style={{ width: '100%', height: '94.5vh' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://icdn.lenta.ru/images/2022/06/28/20/20220628200607220/share_c0e5f01a5e7f67d56e7e055a4cfe73ef.jpeg"
              className="d-block w-100"
              alt="..."
              style={{ width: '100%', height: '94.5vh' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://icdn.lenta.ru/images/2022/07/07/14/20220707145647637/share_0b572a56bcfe8e185882ccb3b64c62bb.jpg"
              className="d-block w-100"
              alt="..."
              style={{ width: '100%', height: '94.5vh' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://icdn.lenta.ru/images/2022/06/17/12/20220617122731285/share_1b641e4c04bbdabfb90b13fcd02d92fd.jpeg"
              className="d-block w-100"
              alt="..."
              style={{ width: '100%', height: '94.5vh' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  );
};
