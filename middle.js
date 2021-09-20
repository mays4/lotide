


const assertArraysEqual = require(`./assertArraysEqual`);
const middle = function(midArray) {
  let middleArray = [];
  if (midArray.length <= 2) {
    return middleArray;
  }
  for (let i = 1; i < midArray.length - 1; i++) {
    middleArray.push(midArray[i]);
  }
  return middleArray;
};
module.exports = middle;


