const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 34]), true); //should not pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); //should not pass
assertEqual(eqArrays(['a, b, ca'], ['a, b, ca']), true); //should pass