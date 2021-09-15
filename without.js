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
const source = function(n){
  let a = [];
  for ( let ns of n ){
    a.push(ns)

  }
  return a;

}
const itemsRemove = function(rem){
  let remo = [];
  for(let f = 0 ; f< rem.length; f++ ){
    remo.push(f[0])
  }
  return remo

}
const without = function(source, itemsRemove) {
  let arr = [];
  if (source.length <= 1) {
    return arr;

  } else {
    for (let i = 0; i < source.length; i++) {
      if (source[i] in itemsRemove){
        return false
      } else {
        arr.push(source[i]);
      }
    }
    return arr;
  }
};



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, ["hello", "world", "lighthouse"]);


