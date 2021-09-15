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

const middle = function(midArray) {
  let middleArray = [];
  if (midArray.length <= 2) {
    return middleArray;
  }
  for (let i = 1; i < midArray.length - 1; i++) {
    middleArray.push(midArray[i]);
  }
  return middleArray;
};


console.log(middle([1]));
console.log(middle([1, 2]));  // => []
//middle([1, 2]);

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
console.log(middle([1, 2, 3])); 
console.log(middle([1, 2, 3, 4, 5])); 
middle([1, 2, 3, 4]); // => [2, 3]
console.log(middle([1, 2, 3, 4])); 
middle([1, 2, 3, 4]); // => [3, 4]
console.log(middle([1, 2, 3, 4])); 