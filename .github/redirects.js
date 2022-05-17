const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..');
const redirectsPath = path.join(basePath, 'static');

// Ensure path exists
if (!fs.existsSync(redirectsPath)) fs.mkdirSync(redirectsPath);

// Create redirects
const redirects = require(path.join(__dirname, 'redirects.json'));
for (const [from, to] of Object.entries(redirects)) {
  const redirectPath = path.join(redirectsPath, from);
  if (!fs.existsSync(redirectPath)) fs.mkdirSync(redirectPath);

  const file = `
    <!doctype html>
    <html>
    
    <head>
      <title>Redirecting...</title>
      <link rel="canonical" href="${to}" />
      <meta charset="utf-8">
      <meta http-equiv="refresh" content="0; url=${to}">
    </head>

    <body>
      <p>You are being redirected to <a href="${to}">${to}</a>.</p>
    </body>
    
    </html>
  `;

  fs.writeFileSync(path.join(redirectPath, 'index.html'), file.trim());
}
