const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;