var assert = require('assert');
var deepCount = require('../recursion/array-deepcount.js');
var max = require('../recursion/madmax.js');
var deepFreezeHelper = require('../recursion/deep-freeze-helper.js');
var digitalRoot = require('../recursion/digital-root.js');

describe('Recursion', function() {
  describe('Array - Deep Count', function() {
    it('should return the count of ALL elements in the array', function() {
      const inputList1 = [1, 2, [3, 4, [5], null, undefined]];
      const result = deepCount(inputList1);
      assert.equal(result, 9);
    });
  });
  describe('MadMax - max', function() {
    it('should return -Infinity for empty array', function() {
      assert.equal(max([]), -Infinity);
    });

    it('should return the max number for given array of numbers', function() {
      assert.equal(max([99, 2, 100, 4, 5]), 100);
    });
  });
  describe('Object - Deep Freeze', function() {
    afterEach(() => {
      Object.deepFreeze = undefined;
    });
    it('should recursively apply freeze to objects', function() {
      let testObj = {
        name: 'Sandeep',
        degrees: ['10th', '12th', 'B.E', { higher: { ms: ['Strutures'], phd: ['Bio'] } }],
        profile: { age: 31, occupation: 'Software Enginner', address: { line1: '#555 6th stage' } }
      };
      deepFreezeHelper(testObj);
      testObj.profile.age = 27;
      assert.notEqual(testObj.profile.age, 27);
      try {
        testObj.degrees[3].higher.ms.push('Wireless');
      } catch (e) {
        assert.notEqual(testObj.degrees[3].higher.ms.length, 2);
      }
    });
    it('should recursively apply freeze to objects: NestedArray', function() {
      let testObj = [
        '10th',
        '12th',
        'B.E',
        [[{ product: 'mobile' }], 100],
        { higher: { ms: ['Strutures'], phd: ['Bio'] } }
      ];
      deepFreezeHelper(testObj);
      testObj[3][0][0].product = 'Laptop';
      assert.notEqual(testObj[3][0][0].product, 'Laptop');
      try {
        testObj[3][0].push('Wireless');
      } catch (e) {
        assert.notEqual(testObj[3][0].length, 2);
      }
    });
  });
  describe('Digital Root', function() {
    it('should give digital root for the given number', function() {
      const result = digitalRoot(16);
      assert.equal(result, 7);
    });
    it('should give digital root for the given number:CASE2', function() {
      const result = digitalRoot(942);
      assert.equal(result, 6);
    });
  });
});
