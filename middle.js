const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
};

assertEqual(eqArrays([4, 3, 3], [4, 3, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), false); // => should PASS

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: True`);
  } else {
    console.log(`Assertion Failed: False`);
  }
};

assertArraysEqual([1, 3, 3], [1, 3, 3]);

const middle = (array) => {
  const result = []; 
  if( array.length < 3) {
    console.log(result);
    return result;
  }
  if (array.length % 2 === 0) {
    result.push(array[Math.floor(array.length / 2) - 1]);
    result.push(array[Math.floor(array.length / 2)]);
  } else {
    result.push(array[Math.floor(array.length / 2)]);
  }
  console.log(result);
  return result;
}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]