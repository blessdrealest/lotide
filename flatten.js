const flatten = function (array) {
  const flattenedArray = [];
  const stack = [...array];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      flattenedArray.unshift(next);
    }
  }

  return flattenedArray;
};

module.exports = flatten;