const assert = require("chai").assert;
const eqArrays = require("../eqArrays");


describe("#eqArrays", () => {
  it('should return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false for [1, 2, 3], [1, 2, 4]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 4]));
  });

  it('should return true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('should return false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
});