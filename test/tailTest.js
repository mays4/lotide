
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
    const words = ["Yo Yo", "Lighthouse", "Labs"];
  assert.strictEqual((words.length), 3); 
  });
  it("returns  ['lighthouse','labs'] for ['Yo Yo', 'Lighthouse', 'Labs'] ", () => {
  
  assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });
  
});





