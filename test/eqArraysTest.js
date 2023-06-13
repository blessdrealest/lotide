const assertEqual = require('../assertEqual');
const eqArrays = require("../eqArrays");


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 34]), true); //should not pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); //should not pass
assertEqual(eqArrays(['a, b, ca'], ['a, b, ca']), true); //should pass