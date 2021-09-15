const letterPositions = function(sentence) {
  // logic to update results here
  const sen = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < sen.length; i++) {
    if (sen[i] !== " ") {
      if (!results[sen[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

  


console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));




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

assertArraysEqual(letterPositions("hello").e, [1]);