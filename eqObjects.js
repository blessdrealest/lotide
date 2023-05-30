//assertEqual-Based Tests
/*
const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] };
eqObjects(multiColorShirtObject , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' };
eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject); // => false */

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

//assertion test
const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function takes in 2 objects
//returns true if both objects have identical keys with identical values
//returns false if no match

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !==keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2){
      return false;
    }
  }
    
    return true;
  };