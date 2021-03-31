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

const without = (source, itemsToRemove) => {

  for (let pos in itemsToRemove){
     let item = itemsToRemove[pos];
     let index = source.indexOf(item);

     if(index > -1){
       source.splice(index, 1);
     }
  }
  return console.log(source);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
