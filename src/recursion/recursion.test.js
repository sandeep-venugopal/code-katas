import deepCount from '../recursion/array-deepcount.js';
import madMax from '../recursion/madmax.js';
import deepFreezeHelper from '../recursion/deep-freeze-helper.js';
import digitalRoot from '../recursion/digital-root.js';

describe('Recursion', function() {
  describe('Array - Deep Count', function() {
    it('should return the count of ALL elements in the array', function() {
      const inputList1 = [1, 2, [3, 4, [5], null, undefined]];
      const result = deepCount(inputList1);
      expect(result).toBe(9);
    });
  });
  describe('MadMax - max', function() {
    it('should return -Infinity for empty array', function() {
      expect(madMax([])).toBe(-Infinity);
    });

    it('should return the max number for given array of numbers', function() {
      expect(madMax([99, 2, 100, 4, 5])).toBe(100);
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
      try {
        testObj.profile.age = 27;
      } catch (e) {
        expect(testObj.profile.age).not.toBe(27);
      }
      try {
        testObj.degrees[3].higher.ms.push('Wireless');
      } catch (e) {
        expect(testObj.degrees[3].higher.ms.length).not.toBe(2);
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
      try {
        testObj[3][0][0].product = 'Laptop';
      } catch (e) {
        expect(testObj[3][0][0].product).not.toBe('Laptop');
      }
      try {
        testObj[3][0].push('Wireless');
      } catch (e) {
        expect(testObj[3][0].length).not.toBe(2);
      }
    });
  });
  describe('Digital Root', function() {
    it('should give digital root for the given number', function() {
      const result = digitalRoot(16);
      expect(result).toBe(7);
    });
    it('should give digital root for the given number:CASE2', function() {
      const result = digitalRoot(942);
      expect(result).toBe(6);
    });
  });
});
