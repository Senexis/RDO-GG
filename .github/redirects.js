const fs = require('fs');
const path = require('path');

const basepath = path.join(__dirname, '..');
const redirectsPath = path.join(basepath, 'content', 'redirect');

// Remove old redirects
if (fs.existsSync(redirectsPath)) fs.rmSync(redirectsPath, { recursive: true });
if (!fs.existsSync(redirectsPath)) fs.mkdirSync(redirectsPath);

// Create redirects
const redirects = require(path.join(__dirname, 'redirects.json'));
for (const [url, to] of Object.entries(redirects)) {
    console.log(url, to);

    let file = '';
    file += '+++\n';
    file += 'type = "redirect"\n';
    file += `url = "/${url}"\n`;
    file += `redirect_to = "${to}"\n`;
    file += 'redirect_enabled = true\n';
    file += 'private = false\n';
    file += '+++\n';

    fs.writeFileSync(path.join(redirectsPath, `${url}.md`), file.trim());
}