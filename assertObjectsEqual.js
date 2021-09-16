

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


};
//console.log(`Example label: ${inspect(actual)}`);


const eqObjects = function(object1, object2) {

  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
 

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
  
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
     
      } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return false;
      
      } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
        
        return false;
        
       
      }
    }
    return true;
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);
assertObjectsEqual(ab, abc);