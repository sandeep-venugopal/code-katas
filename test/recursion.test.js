var assert = require('assert');
var deepCount = require('../recursion/array-deepcount.js');

describe('Recursion', function() {
  describe('Array - Deep Count', function() {
    it('should return the count of ALL elements in the array', function() {
      const inputList1 = [1, 2, [3, 4, [5], null, undefined]];
      const result = deepCount(inputList1);
      assert.equal(result, 9);
    });
  });
});
