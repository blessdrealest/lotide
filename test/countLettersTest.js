const countLetters = require('../countLetters');
const assert = require('chai').assert;

const results1 = countLetters("hello labbers and friends");
const results2 = countLetters("lighthouse labs");

describe('#countLetters', () => {
  
  it("should return 3 for results1['e']", () => {
    assert.strictEqual(results1['e'], 3);
  });

  it("should return 1 for results2['i]", () => {
    assert.strictEqual(results2['i'], 1);
  });
  
});