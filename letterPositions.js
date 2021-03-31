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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  
  for (let i = 0; i < sentence.length; i++) {
    const item = sentence[i];
    if (!results[item]) {
      results[item] = [i];
    } else {
      results[item].push(i);
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);