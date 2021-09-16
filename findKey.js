
const findKey = function(ob,callback) {
  let y = Object.keys(ob);
  for (let key of y) {
 
    if (callback(ob[key])) {
      return key;
    }
  
  }
  return undefined;
  
  

};



let findKeys = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);// => "noma"






const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
  }
};
assertEqual(findKeys , "noma");