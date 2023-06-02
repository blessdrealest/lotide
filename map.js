//map func returns array to map
//map func returns callbk fn
//const words = ['ground', 'control', 'to', 'major', 'tom'];
//const results1 = map(words, word => word[0]);
//console.log(results1);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
}
return results;
}


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

//Test 1:Map with array sum
/*const sum = function (num) {
  return num + num;
};
const inputArray = [2, 4, 6, 8];
const outputArray = [4, 8, 12, 16];

const test = map(inputArray, sum);
assertArraysEqual(test, outputArray);
*/

//Test 2: Mapping string length arrays

/*const wordsLength = (str) => {
  return str.length;
};
const words = ['ground', 'control', 'to', 'major', 'tom'];
const expectedOutput = [6, 6, 2, 5, 3];
const output = map(words, wordsLength);
assertArraysEqual(output, expectedOutput);
//expectation is fail as it should be [6, 7, 2, 5 ,3]*/

//Test 3: Mapping objects to properties
let animals = [
{name: 'bobby', age: 5},
{name: 'charlie', age: 8},
{name: 'sarah', age: 10}
];

let findAge = obj => {
  return obj.age;
};
let expectedOutput = [5, 8, 10];

const test = map(animals, findAge);
assertArraysEqual(test, expectedOutput);
//expecting test pass
