// const assertEqual = function(actual, expected) {
  
//   if (actual === expected) {
//     console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');
const head = function(num) {
  for (let i = 0; i < num.length; i++) {
    //console.log(i)
    if (i === 0) {
      return num[i];
    }
  }
};



