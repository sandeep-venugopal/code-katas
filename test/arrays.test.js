var assert = require('assert');
var buketize = require('../arrays/frequency-analysis.js');
var minSum = require('../arrays/min-sum.js');
var twoSum = require('../arrays/two-sum.js');

describe('Arrays', function() {
  describe('Frequency Analysis', function() {
    it('should return the bucketized analysis of the input list', function() {
      const inputList1 = [1, 2, 3, 4, 4, 5, 5, 5];
      const output = [null, [1, 2, 3], [4], [5], null, null, null, null, null];
      const result = buketize(inputList1);
      for (let i = 0; i < result.length; i++) {
        if (result[i]) {
          for (let j = 0; j < result[i]; j++) {
            assert.equal(result[i][j], output[i][j]);
          }
        } else {
          assert.equal(result[i], null);
        }
      }
    });

    it('should return the bucketized analysis of the input list CASE2', function() {
      const inputList2 = [0, 1, 2, 3, 4, 4, 5, 5, 5, 0, 0];
      const output = [null, [1, 2, 3], [4], [0, 5], null, null, null, null, null, null, null, null];
      const result = buketize(inputList2);
      for (let i = 0; i < result.length; i++) {
        if (result[i]) {
          for (let j = 0; j < result[i]; j++) {
            assert.equal(result[i][j], output[i][j]);
          }
        } else {
          assert.equal(result[i], null);
        }
      }
    });

    it('should return the bucketized analysis of the input list CASE2', function() {
      const inputList3 = [7, 7, 7, 7, 7, 7, 7];
      const output = [null, null, null, null, null, null, null, [7]];
      const result = buketize(inputList3);
      for (let i = 0; i < result.length; i++) {
        if (result[i]) {
          for (let j = 0; j < result[i]; j++) {
            assert.equal(result[i][j], output[i][j]);
          }
        } else {
          assert.equal(result[i], null);
        }
      }
    });
  });

  describe('minSum', function() {
    it('should return the bucketized analysis of the input list', function() {
      const arr = [5, 4, 2, 3];
      const result = minSum(arr);
      assert.equal(result, 22);
    });
  });

  describe('twoSum', function() {
    it('should return all possible integer pairs that sum upto given S: CASE1', function() {
      const numbers = [3, 5, 2, -4, 8, 11];
      const S = 7;
      const result = twoSum(numbers, S);
      result.map(numbers => numbers.sort());
      assert.equal(result.length, 2);
      assert.equal(result[0][0], 2);
      assert.equal(result[0][1], 5);
      assert.equal(result[1][0], -4);
      assert.equal(result[1][1], 11);
    });
    it('should return all possible integer pairs that sum upto given S: CASE2', function() {
      const numbers = [2, 2, 3];
      const S = 4;
      const result = twoSum(numbers, S);
      assert.equal(result.length, 1);
    });
  });
});
