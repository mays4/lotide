
const findKeyByValue = function(ob,findByValue) {
  for (let key of Object.keys(ob)) {
    
    if (ob[key] === findByValue) {
      return key;
      
    }
  }
};
 
module.exports = findKeyByValue;


