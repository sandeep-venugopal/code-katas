var assert = require('assert');
var sentence = require('../misc/string-reordering.js');
var createWaterfowlSurveyReport = require('../misc/waterfowl-survey-report.js');
var tvRemote = require('../misc/tv-remote.js');

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

  describe('Water-fowl Survey Report', function() {
    it('should return disqualied data, if"Labrador Duck" is found', function() {
      const specialCaseInput = [
        'Redhead 3',
        'Gadwall 1',
        'Smew 4',
        'Greater Scaup 10',
        'Redhead 3',
        'Gadwall 9',
        'Greater Scaup 15',
        'Common Eider 6',
        'Labrador Duck 6'
      ];
      const result = createWaterfowlSurveyReport(specialCaseInput);
      assert.equal(result[0], 'Disqualified data');
    });

    it('should return disqualied data, if"Labrador-Duck" is found', function() {
      const specialCaseInput = ['Redhead 5', 'Labrador Duck    9', 'Blue-Winged Teal  25', "Steller's Eider  200"];
      const result = createWaterfowlSurveyReport(specialCaseInput);
      assert.equal(result[0], 'Disqualified data');
    });

    it('should return the correct report: CASE 1', function() {
      const stdInput = [
        'Redhead 3',
        'Gadwall  1',
        'Smew 4',
        'Greater Scaup 10',
        'Redhead 3',
        'Gadwall 9',
        'Greater Scaup  15',
        'Common Eider 6'
      ];
      const result = createWaterfowlSurveyReport(stdInput);
      assert.equal(result[0], 'COMEID');
      assert.equal(result[1], 6);
      assert.equal(result[2], 'GADWAL');
      assert.equal(result[3], 10);
      assert.equal(result[4], 'GRESCA');
      assert.equal(result[5], 25);
      assert.equal(result[8], 'SMEW');
      assert.equal(result[9], 4);
    });
  });
  describe('Tv Remote', function() {
    it('should return the correct number of moves required type the given word: CASE1', function() {
      const moves = tvRemote('codewars');
      assert.equal(moves, 36);
    });

    it('should return the noof moves required to type the given word: CASE2', function() {
      const moves = tvRemote('aaabbbccc');
      assert.equal(moves, 11);
    });
  });
});
