const assertEqual = require('chai').assert;
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 2); // original array should still have 3 elements!


describe("#tail", () => {

  it("returns array length 3", () => {
    assertEqual.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });

});