const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {

  it("returns an empty array []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns an empty array []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [ 2 ]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [ 3 ]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [ 2, 3 ]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [ 3, 4 ]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
