const strg = process.argv.slice(2);

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

strg.forEach(arg => {
  console.log(reverseString(arg));
});
//console.log(reverseString('lighthouse'));