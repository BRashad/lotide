const middle = require('../middle');
const assertArraysEqual = require('chai').assert;



describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello']), 'Hello'); 
  });

});




assertArraysEqual([1, 3, 3], [1, 3, 3]);

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]