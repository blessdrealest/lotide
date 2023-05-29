const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Take in an object and a value
//scan the object and return the first key
//first key should contain the given value
//if no key with that given value, it should return undefined

const findKeyByValue = (obj, value) => {
const keys = Object.keys(obj); //gets an array of all keys in the object
for (const key of keys) { //iterating over each key
  if (obj[key] === value) { //check to see if a match is found
    return key;
  }
}
return undefined;//undefined comes back if no match is found
};

//test
/*const myObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};
console.log(findKeyByValue(myObject, 'value2')); //output should be key2
console.log(findKeyByValue(myObject, 'value4')); //output should be undefined 

//assertion test
assertEqual(findKeyByValue(myObject, 'value1'), 'key1');
assertEqual(findKeyByValue(myObject, 'value5'), undefined);*/