const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
  }
};
const head = function(num) {
  for (let i = 0; i < num.length; i++) {
    //console.log(i)
    if (i === 0) {
      return num[i];
    }
  }
};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([6]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");