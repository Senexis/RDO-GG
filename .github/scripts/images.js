const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..', '..');
const staticPath = path.join(basePath, 'static');
const toastsPath = path.join(staticPath, 'img', 'toasts');
const locationsPath = path.join(staticPath, 'img', 'locations');

const languageFile = require(path.join(__dirname, 'images.json'));

const toasts = {};
fs.readdirSync(toastsPath).forEach(category => {
  const categoryPath = path.join(toastsPath, category);

  if (['awards', 'challenges'].includes(category)) {
    toasts[category] = {};

    fs.readdirSync(categoryPath).forEach(toast => {
      const toastPath = path.join(categoryPath, toast);
      const toastName = path.basename(toastPath, '.png');

      const parts = toast.split('_');
      const subcategory = parts.slice(1, parts.length - 1).join('_');
      if (!toasts[category][subcategory]) toasts[category][subcategory] = [];

      toasts[category][subcategory].push({
        id: toastName,
        name: languageFile.toasts[toastName],
        url: `/img/toasts/${category}/${toastName}.png`,
      });

      toasts[category][subcategory].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    });
  } else {
    toasts[category] = [];

    fs.readdirSync(categoryPath).forEach(toast => {
      const toastPath = path.join(categoryPath, toast);
      const toastName = path.basename(toastPath, '.png');

      toasts[category].push({
        id: toastName,
        name: languageFile.toasts[toastName],
        url: `/img/toasts/${category}/${toastName}.png`,
      });
    });

    toasts[category].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
  }
});
fs.writeFileSync(path.join(staticPath, 'json', 'toasts.json'), JSON.stringify(toasts));

const locations = {};
fs.readdirSync(locationsPath).forEach(location => {
  const locationPath = path.join(locationsPath, location);
  const locationName = path.basename(locationPath, '.png');

  const category = locationName.split('_')[0];
  if (!locations[category]) locations[category] = [];

  locations[category].push({
    id: locationName,
    name: languageFile.locations[locationName],
    url: `/img/locations/${locationName}.png`,
  });
  locations[category].sort((a, b) => a.name.localeCompare(b.name));
});
fs.writeFileSync(path.join(staticPath, 'json', 'locations.json'), JSON.stringify(locations));
