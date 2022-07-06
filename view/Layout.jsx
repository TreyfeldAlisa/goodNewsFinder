const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        {/* <script defer src="/scripts/client.js" /> */}
        <title>{title}</title>
      </head>
      <body>
        {/* <NavBar user={user} /> */}
        {children}
      </body>
    </html>
  );
};
