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

const without = function(source, itemsRemove) {
  let arr = [];
  for (let i = 0; i < source.length; i++) {
    let match = false;
    for (let j = 0; j < itemsRemove.length; j++) {
      if (source[i] === itemsRemove[j]) {
        match = true;
      }
    }
    // if not match
    if (!match) {
      arr.push(source[i]);
    }
  }
  return arr;

};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
