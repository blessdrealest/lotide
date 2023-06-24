const takeUntil = function (array, callback) {
  const result = [];
  for (let val of array) {
    if (callback(val)) {
      return result;
    }
    result.push(val);
  }
  return result;
};

module.exports = takeUntil;