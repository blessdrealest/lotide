const takeUntil = function(array, callback) {
//return slice of array with elements taken from beginning
//continue until cb returns truthy value
//cb should only have 1 value; item in array
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {//check to see if callback func returns true value for array[i]
      return result;
    }
    result.push(array[i]);
  }
  return result;
};