const countLetters = function(itemToCount, allLetters) {
  let countedLet = {};

  for (let letter of itemToCount) {
    if (letter !== ' ') {
      countedLet[letter] = (countedLet[letter] || 0) + 1;
    }

  }

  return countedLet;
};

module.exports = countLetters;