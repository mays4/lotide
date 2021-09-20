
const assertEqual = require('../assertEqual');
const tail = require('../tail');
// TEST CODE
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
// no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
const numbers2 = [1,2,3,4,5];
const result2 = tail(numbers2);
assertEqual(numbers2.length, 5);
assertEqual(result2.length, 4);
assertEqual(result2[0],2);



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

