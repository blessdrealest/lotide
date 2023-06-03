const takeUntil = function(array, callback) {
//return slice of array with elements taken from beginning
//continue until cb returns truthy value
//cb should only have 1 value; item in array
  const result = [];
  for (let val of array) {
    if (callback(val)) {//check to see if callback func returns true value for array[i]
      return result;
    }
    result.push(val);
  }
  return result;
};




//assertArraysEqual test
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))  {
    console.log(`🙂 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😞Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//the arrays need to be of the same length to be equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { //this will check to see that the 2 arrays have the same elements
      return false;
    }
  }

  return true;
  // this will conirm that all elements are the same if true
}

//tests
//test 1- takeUntil we reach even number
const array1 = [1, 5, 9, 3, 2, 6, 10];
const callback1 = (val) => {
  return val % 2 === 0;
};
const result1 = takeUntil(array1, callback1);
assertArraysEqual(result1, [1, 5, 9, 3]);
