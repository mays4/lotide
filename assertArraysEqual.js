
const eqArrays = function(first , second) {
  
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  if (first.length !== second.length) {
    return false;
  } else if (first === null || second === null) {
    return false;
  } else {
    return true;
  }
  
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual ,  expected)) {

    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  // => should PASS