// Test/Assertion Functions
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

//Actual Function
const middle = function(array) {
  let middle = [];
  // if we are looking to pull middle, there has to be more than 2
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let i1 = array.length / 2 - 1; //subtract 1 since array indices are zero-based
      let i2 = (array.length / 2);
      middle.push(array[i1], array[i2]); //using indices to access the elements
    } else {
      let i = Math.floor(array.length / 2); //Math.floor will allow to get integer index
      middle.push(array[i]);
    }
  }
  return middle; //returns empty middle if middle is <= 2
}


//Test Code
//arrays with one or two elements. expecting no middle
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

//arrays with odd number of elements. expecting single middle element
assertArraysEqual(middle([1, 2, 3]), [2]); //answer should be [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //answer should be [3]

//even number arrays. the 2 middle numbers are expected
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //answer should be [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //answer should be [3, 4]

