
const assertEqual = require('./assertEqual');
const tail = function(num) {
  let arr = [];
  if (num.length <= 1) {
    return arr;

  } else {
    for (let i = 0; i < num.length; i++) {
      if (i !== 0) {
        arr.push(num[i]);
      }
    }
    return arr;
  }
};



