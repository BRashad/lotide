const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

module.exports = assertEqual;
module.exports = eqArrays;