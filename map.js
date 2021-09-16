// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
//}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(results1, [ 'g', 'c', 'm', 't' ]); 
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); 
