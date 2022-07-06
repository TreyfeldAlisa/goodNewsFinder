const React = require('react');
const NavMenu = require('./NavMenu');

module.exports = function Layout({ title, user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/main.css" />
        <script defer src="/scripts/client.js" />
        <title>{title}</title>
      </head>
      <body>
        <NavMenu user={user} />
        {children}
      </body>
    </html>
  );
};
