/**
 * find all the pairs of two integers in an unsorted array that sum up to a given S.
 * For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
 * your program should return [[11, -4], [2, 5]]
 * because 11 + -4 = 7 and 2 + 5 = 7.
 * [-4, 2, 3, 5, 8, 11]
 */
export default function twoSum(numbers, S) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const secondIndex = numbers.indexOf(S - numbers[i], i + 1);
    if (secondIndex > i) {
      result.push([numbers[i], numbers[secondIndex]]);
    }
  }
  return result;
}

// function twoSum(numbers, S) {
//   const sortedNumbers = numbers.sort((a, b) => a - b);
//   let start = 0;
//   let end = sortedNumbers.length - 1;
//   let result = [];
//   while (start !== end) {
//     const sum = sortedNumbers[start] + sortedNumbers[end];
//     if (sum === S) {
//       result.push([sortedNumbers[start], sortedNumbers[end]]);
//     }
//     if (sum >= S) {
//       end -= 1;
//     } else {
//       start += 1;
//     }
//   }
//   return result;
// }

module.exports = twoSum;
