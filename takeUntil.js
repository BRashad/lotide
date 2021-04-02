const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

const takeUntil = function(array, callback) {
  let numbers = [];
  for (let element of array) {
    if (callback(element) === false) {
      numbers.push(element);
    } else {
      return numbers;
    }
  }
  return numbers;
};

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
console.log("---");

const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
};


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);