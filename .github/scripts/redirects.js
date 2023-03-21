const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..', '..');
const redirectsPath = path.join(basePath, 'build');

// Ensure path exists
if (!fs.existsSync(redirectsPath)) fs.mkdirSync(redirectsPath);

// Create redirects
const redirects = require(path.join(__dirname, 'redirects.json'));
for (const [from, to] of Object.entries(redirects)) {
  const redirectPath = path.join(redirectsPath, from);
  if (!fs.existsSync(redirectPath)) fs.mkdirSync(redirectPath);

  const file = `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Redirecting...</title>
        <meta charset="utf-8">
        <meta http-equiv="refresh" content="0; url=${to}">
        <link rel="canonical" href="${to}" />
        <style>
          html {
            background-color: #1b1b1d;
            color: #ffffff;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          }
          div {
            padding: 2em;
            text-align: center;
          }
          a {
            color: #ff2424;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>You are being redirected...</h1>
          <p>If you are not redirected in the next couple of seconds, <a href="${to}">please click here</a>.</p>
        </div>
        <script>
          window.location.href = '${to}';
        </script>
      </body>
    </html>
  `;

  fs.writeFileSync(path.join(redirectsPath, `${from}.html`), file.trim());
  fs.writeFileSync(path.join(redirectPath, 'index.html'), file.trim());
}
