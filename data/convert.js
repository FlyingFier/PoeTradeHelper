const fs = require('fs');
const { format, parse } = require('lua-json')

fs.readFile('D:/dev/PoeModData/jewel.lua', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const new_data = JSON.stringify(parse(data))
  fs.writeFile('D:/dev/PoeModData/jewel.js', new_data, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully

  });
});
