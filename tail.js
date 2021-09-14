const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
  }
};

const tail = function(num) {
  let arr = [];
  if (num.length <= 1) {
    return arr;

  } else {
    for (let i = 0; i < num.length; i++) {
      if (i !== 0) {
        arr.push(num[i]);
      }
    }
    return arr;
  }
};

// TEST CODE
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
// no need to capture the return value since we are not checking it
assertEqual(words.length, 3);



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
