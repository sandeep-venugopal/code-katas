/**
 * The input will be an array of dictionaries.
 * Return the values as a string-seperated sentence
 * in the order of their keys' integer equivalent (increasing order).
 * The keys are not reoccurring and their range is -999 < key < 999.
 * The dictionaries' keys & values will always be strings
 * and will always not be empty.
 * Example:
 * Input:
 * List = [
 *  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
 *  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
 * ]
 *
 * Output:
 * 'Vatsan took his dog for a spin'
 *
 */
export default function sentence(List) {
  return List.sort((a, b) => Object.keys(a) - Object.keys(b))
    .map(obj => obj[+Object.keys(obj)])
    .join(' ');
}

// function sentence(List) {
//   return List.sort((a, b) => Object.keys(a) - Object.keys(b))
//     .reduce((acc, curr, index) => {
//       return acc + `${Object.values(curr)[0]} `;
//     }, '').trim();
// }
