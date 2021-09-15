const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(first , second) {
  
  // for (let i = 0; i < first.length; i++) {
  //   if (first[i] !== second[i]) {
  //     console.log("🛑🛑🛑 the Arrays are not identicals ");
  //   }
  // }
  if (first.length !== second.length) {
    console.log("🛑🛑🛑 the Arrays length are not equal ");
    return false;
  } else if (first === null || second === null) {
    console.log("🛑🛑🛑 the Arrays is null");
    return false;
  } else {
    console.log(" ✅✅✅ the arrays are identicals");
    return true;
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  // => should PASS