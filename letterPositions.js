const letterPositions = (sentence) => {
  const results = {};
  // logic to update results here

  //loop through sentence
  for(let i = 0; i < sentence.length; i++){
    let char = sentence[i];

    //skip spaces
    if (char === ' ') {
      continue;
    }
    
    //create an array if not already present
    if (!results[char]) {
      results[char] = [];
    }
    //add the index to the array
    results[char].push(i);
  }
  return results;
};

//call the function to check
let pos = letterPositions ('light lab');
console.log(pos);

// assert arrays test
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))  {
    console.log(`🙂 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😞Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//eqArrays test
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

//test code
assertArraysEqual(letterPositions("blessing").g, [7]);

