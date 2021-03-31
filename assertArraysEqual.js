const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
};

// assertEqual(eqArrays([4, 3, 3], [4, 3, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), false); // => should PASS

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};

assertArraysEqual([1, 3, 3], [1, 3, 3]);