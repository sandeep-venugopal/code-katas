/**
 * Your friend has invited you to a party, and tells you to meet them
 * in the line to get in. The one problem is it's a masked party.
 * Everyone in line is wearing a colored mask, including your friend.
 * Find which people in line could be your friend.
 *
 * Your friend has told you that he will be wearing a RED mask,
 * and has TWO other friends with him, both wearing BLUE masks.
 * Input to the function will be an array of strings, each representing a colored mask.
 * For example:
 * var line = ['blue','blue','red','red','blue','green'];
 * The output of the function should be the number of people who could possibly be your friend.
 *
 * friendFind(['blue','blue','red','red','blue','green','chipmunk'])  // should return 1
 */
export default function friendFind(line) {
  let count = 0;
  line.forEach((curr, i) => {
    if (
      (curr === 'red' && line[i + 1] === 'blue' && line[i + 2] === 'blue') ||
      (curr === 'red' && line[i - 1] === 'blue' && line[i + 1] === 'blue') ||
      (curr === 'red' && line[i - 1] === 'blue' && line[i - 2] === 'blue')
    ) {
      count += 1;
    }
  });
  return count;
}
