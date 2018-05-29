var assert = require('assert');
var sentence = require('../misc/string-reordering.js');

describe('Miscellaneous', function() {
  describe('String Re-ordering', function() {
    const validCase1 = [
      { '4': 'dog' },
      { '2': 'took' },
      { '3': 'his' },
      { '-2': 'Vatsan' },
      { '5': 'for' },
      { '6': 'a' },
      { '12': 'spin' }
    ];
    const validCase2 = [
      { '-998': 'took' },
      { '999': 'spin' },
      { '3': 'dog' },
      { '0': 'his' },
      { '5': 'for' },
      { '6': 'a' },
      { '-999': 'Vatsan' }
    ];
    it('should return the re-ordered sentence for VALID INPUT CASE 1', function() {
      assert.equal(sentence(validCase1), 'Vatsan took his dog for a spin');
    });
    it('should return the re-ordered sentence for VALID INPUT CASE 2', function() {
      assert.equal(sentence(validCase2), 'Vatsan took his dog for a spin');
    });
  });
});
