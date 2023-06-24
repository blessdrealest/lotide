const middle = function (array) {
  let middle = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let i1 = array.length / 2 - 1;
      let i2 = (array.length / 2);
      middle.push(array[i1], array[i2]);
    } else {
      let i = Math.floor(array.length / 2);
      middle.push(array[i]);
    }
  }
  return middle;
}

module.exports = middle;
