const assertArraysEqual = require('../assertArraysEqual');
const  eqArrays = require('../eqArrays');


assertArraysEqual(["1", "4", "5"], ["1", "4", "5"]); // Pass
assertArraysEqual(["1", "7", "3"], ["18", "2", "4"]); // Fail
assertArraysEqual(["13", "23", "34"], ["178", "2", "3", "4"]); // Fail
assertArraysEqual(["1", "2", "36"], ["1", "2", 3]); // Fail
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  //PASS