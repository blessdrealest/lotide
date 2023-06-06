//cb=callback
const findKey = (obj, cb) => {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
  return undefined;
}






const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

//test case #1




//test case #2

