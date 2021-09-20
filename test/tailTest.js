
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 and 3 for [1, 2, 3]", () => {
  assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns 7 ,6 for [7,7,6]", () => {
   
    assert.deepEqual(tail([7, 7, 6]), [7,6]);
  });

  it("returns words length 3 for words['Yo Yo', 'Lighthouse', 'Labs'] ", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
  assert.strictEqual((words.length), 3); 
  });
  it("returns  ['lighthouse','labs'] for ['Hello', 'Lighthouse', 'Labs'] ", () => {
  
  assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
  
});


//const assertEqual = require('../assertEqual');
// TEST CODE
// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);
// const numbers2 = [1,2,3,4,5];
// const result2 = tail(numbers2);
// assertEqual(numbers2.length, 5);
// assertEqual(result2.length, 4);
// assertEqual(result2[0],2);
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");


