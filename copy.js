const fs = require('node:fs');

fs.readdir('node_modules/lucide-static/icons', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    fs.copyFile(`node_modules/lucide-static/icons/${file}`, `icons/${file}`, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`node_modules/lucide-static/icons/${file} was copied to icons/${file}`);
    });
  });
});