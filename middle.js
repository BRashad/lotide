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

module.exports = middle;