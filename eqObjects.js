

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
module.exports = eqObjects; 

  
          
