import sentence from '../misc/string-reordering';
import createWaterfowlSurveyReport from '../misc/waterfowl-survey-report';
import tvRemote from '../misc/tv-remote.js';
import tvRemoteS2 from '../misc/tv-remote-s2.js';

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
      expect(sentence(validCase1)).toBe('Vatsan took his dog for a spin');
    });
    it('should return the re-ordered sentence for VALID INPUT CASE 2', function() {
      expect(sentence(validCase2)).toBe('Vatsan took his dog for a spin');
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
      expect(result[0]).toBe('Disqualified data');
    });

    it('should return disqualied data, if"Labrador-Duck" is found', function() {
      const specialCaseInput = ['Redhead 5', 'Labrador Duck    9', 'Blue-Winged Teal  25', "Steller's Eider  200"];
      const result = createWaterfowlSurveyReport(specialCaseInput);
      expect(result[0]).toBe('Disqualified data');
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
      expect(result[0]).toBe('COMEID');
      expect(result[1]).toBe(6);
      expect(result[2]).toBe('GADWAL');
      expect(result[3]).toBe(10);
      expect(result[4]).toBe('GRESCA');
      expect(result[5]).toBe(25);
      expect(result[8]).toBe('SMEW');
      expect(result[9]).toBe(4);
    });
  });
  describe('Tv Remote', function() {
    it('should return the correct number of moves required type the given word: CASE1', function() {
      const moves = tvRemoteS2('codewars');
      expect(moves).toBe(36);
    });

    it('should return the noof moves required to type the given word: CASE2', function() {
      const moves = tvRemoteS2('aaabbbccc');
      expect(moves).toBe(11);
    });
  });
  describe('Tv Remote-S2', function() {
    it('should return the correct number of moves required type the given word: CASE1', function() {
      const moves = tvRemoteS2('codewars');
      expect(moves).toBe(36);
    });

    it('should return the noof moves required to type the given word: CASE2', function() {
      const moves = tvRemote('aaabbbccc');
      expect(moves).toBe(11);
    });
  });
});
