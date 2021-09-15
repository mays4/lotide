const countLetters = function(sentance) {
  const results = {};
  for (const num of sentance) {
    num.toLowerCase();
    if (results[num]) {
      results[num] += 1;
    } else {
      results[num] = 1;
    }
  }
  return results;
};






console.log(countLetters("lighthouse in the house"));


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
  }
};
