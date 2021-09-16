

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

        


  

  
       

              
         
       



// for(let b of object2){
//          if(a === b){
//            if(typeof(object1[a])=== Object || typeof(object2[b] === Object ))

//          }
//       if (object1[o] === object2[o]) {
//         return true;
//       } else {
//         return false;
//       }


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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅" + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + ` Assertion Failed  :${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));

assertEqual(eqObjects(ab, ba),true);
assertEqual(eqObjects(ab, abc),false);
assertEqual(eqObjects(cd, dc),true);
assertEqual(eqObjects(ab, abc),false);


assertEqual(eqArrays(eqObjects(ab, ba),true),true);
assertEqual(eqArrays(eqObjects(cd, cd2),false),true);
assertEqual(eqArrays(eqObjects(cd, dc),true),true);
assertEqual(eqArrays(eqObjects(ab, abc),false),true);