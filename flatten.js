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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))  {
    console.log(`🙂 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😞Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(array) {
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
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattened = flatten(nestedArray);
console.log(flattened); // should result in array flattened together