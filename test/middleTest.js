const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//arrays with one or two elements. expecting no middle
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// //arrays with odd number of elements. expecting single middle element
assertArraysEqual(middle([1, 2, 3]), [2]); //answer should be [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //answer should be [3]

// //even number arrays. the 2 middle numbers are expected
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //answer should be [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //answer should be [3, 4]