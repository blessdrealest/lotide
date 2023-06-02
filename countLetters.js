const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2))  {
    console.log(`🙂 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😞Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const countLetters = function(itemToCount, allLetters) {
  let countedLet = {};

  for (let letter of itemToCount) {
    if (letter !== ' ') {
      countedLet[letter] = (countedLet[letter] || 0) + 1;
    }

  }

  return countedLet;
};

/* the function can return an object where each
unique char in the string is a property
of the obj and the value for that property/key
should be the number of occurrences for that
char*/
//for of loops can be used for strings


// to skip spaces
//if(your variables !== " ") {

//}

//let sentence = 'Blessing';
//let result = countLetters(sentence);
//console.log(result);