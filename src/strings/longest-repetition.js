/**
 * For a given string s find the character c with longest consecutive
 * repetition and return a tuple (c, l) or [c, l] in javascript where
 * l is the length of the repetition. If there are two or more characters with the same l return the first.
 */
export default function longestRepetition(s) {
  if (!s) return ['', 0];
  return s.match(/(.)\1+/g).reduce(
    (acc, curr) => {
      if (curr.length > acc[1]) {
        [acc[0]] = curr;
        acc[1] = curr.length;
        return acc;
      }
      return acc;
    },
    ['', 0]
  );
}
