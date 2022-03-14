const fs = require('fs');

const data = require('./world_universities_and_domains.json');

const us = data.filter(entry => entry.country === 'United States');
console.log(`${us.length} in filtered data`);

fs.writeFile("./us.json", JSON.stringify(us, null, 2), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});
