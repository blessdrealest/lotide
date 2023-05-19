const assertEqual = function(actual, expected) {
  if (actual === expected)  {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞Assertion Failed: ${actual} !== ${expected}`);
  }
};
//assertEqual('Lighthouse Labs', 'Bootcamp');
//assertEqual(1, 1);

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

//Test case
//const words = ["yo yo", "Lighthouse", "Labs"];
//console.log(tail(words));
//assertEqual(words.length, 3); //original array should have 3 elements