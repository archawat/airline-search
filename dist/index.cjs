const Fuse = require('fuse.js');
const airlines = require('../data/airlines.json');

const options = {
  keys: [
    { name: "code", weight: 0.9 },
    { name: "name", weight: 0.6 },
  ],
};

const fuse = new Fuse(airlines, options);

function searchCode(searchTerm) {
  const result = fuse.search(searchTerm);
  if (!result || result.length === 0 || !result[0].item) {
    return "";
  }
  return result[0].item.code || "";
}

module.exports = { searchCode };