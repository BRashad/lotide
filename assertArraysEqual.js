const eqArrays = require('./eqArrays');


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};

module.exports = assertArraysEqual;