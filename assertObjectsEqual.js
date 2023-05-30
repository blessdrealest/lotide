//eqObjects
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
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2){
      return false;
    }
  }
    
    return true;
  };

//function implementation for assetObjectsEqual
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util'). inspect; //this allows for more detailed output to the console

  if (eqObjects(actual, expected)) {
    console.log(`🙂 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
} else {
  console.log(`😞Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}
};

const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] };

//assertion test
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); //output should pass