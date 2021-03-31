const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


// //TEST CODE
// assertEqual('LightHouse Labs', 'Bootcamp');
// assertEqual(1, 1);
// assertEqual(1, "adas");

const countLetters = (str) => {

  let count = {};

  for (let i = 0; i < str.length; i++){
    const letter = str[i];
    
    // if the property isn't in the object, it means that the letter is a new one and we'll create this property and assign it the value 1
    if (!count[letter]) {
			count[letter] = 1;

			// else, it means that the property is already there and we just increment it by 1
		} else {
			count[letter]++;
		}
  }
  console.log(count);
  return count;
}

countLetters('abracadabra');


