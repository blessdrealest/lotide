const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "4"]); // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // Fail
