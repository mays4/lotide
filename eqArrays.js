// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
