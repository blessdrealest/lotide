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

const without = function(source, itemsToRemove) {
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
}

console.log(without([1, 2, 3], [1])); // this should output [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // this should output ["1", "2"]
console.log(without(["red", "blue", "green"], ["blue", "orange"])); //should output ["red", "green"]
console.log(without([5, 5, 5, 6, 6, 3, 2], [5, 6])); //output [3, 2]
console.log(without([], [1, 2])); //there should be no output array
console.log(without([1, 2], [])); //result should be [1, 2]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
