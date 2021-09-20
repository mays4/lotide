
const findKey = function(ob,callback) {
  let y = Object.keys(ob);
  for (let key of y) {
 
    if (callback(ob[key])) {
      return key;
    }
  }
  return undefined;

};

module.exports = findKey;

