const assertArraysEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);

//console.log(middle([1]));
console.log(middle([1, 2]));  // => []
middle([1, 2]);

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
console.log(middle([1, 2, 3])); 
console.log(middle([1, 2, 3, 4, 5])); 
middle([1, 2, 3, 4]); // => [2, 3]
console.log(middle([1, 2, 3, 4])); 
middle([1, 2, 3, 4]); // => [3, 4]


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(middle(words));

// no need to capture the return value since we are not checking it
assertArraysEqual(words.length, 3);
const numbers2 = [1,2,3,4,5];
const result2 = middle(numbers2);
assertArraysEqual(numbers2.length, 5);
assertArraysEqual(result2.length, 4);
assertArraysEqual(result2[0],2);



assertArraysEqual(["1", "4", "5"], ["1", "4", "5"]); // Pass
assertArraysEqual(["1", "7", "3"], ["18", "2", "4"]); // Fail
assertArraysEqual(["13", "23", "34"], ["178", "2", "3", "4"]); // Fail
assertArraysEqual(["1", "2", "36"], ["1", "2", 3]); // Fail