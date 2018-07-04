import longestRepetition from '../strings/longest-repetition.js';

describe('Strings', function() {
  describe('Longest Repetition', function() {
    it('should return the character with longest consecutive repetition: STD CASE', function() {
      const S = 'aauuudduuuueff';
      const result = longestRepetition(S);
      const [character, l] = result;
      expect(character).toBe('u');
      expect(l).toBe(4);
    });

    it('should return the character with longest consecutive repetition: EMPTY CASE', function() {
      const S = '';
      const result = longestRepetition(S);
      const [character, l] = result;
      expect(character).toBe('');
      expect(l).toBe(0);
    });
  });
});
