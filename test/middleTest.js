const assert = require('chai').assert;
const middle = require(`../middle`);

describe("#middle", () => {
  it("returns 2  for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 7 and 9  for [7,7,9,6]", () => {
   
    assert.deepEqual(middle([7, 7,9, 6]), [7,9]);
  });

  
  it("returns  ['lighthouse'] for ['Yo Yo', 'Lighthouse', 'Labs'] ", () => {
  
    assert.deepEqual(middle(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });
  
});










