/**
 * Given an input array (arr) of positive integers,
 * the objective is to return an output array
 * where each index represents the amount of times an element appeared
 * (frequency) in the input array.
 *
 * More specifically, the element at each index of the output array
 * will be an array (bucket) containing integers that appeared index-amount-of-times.
 * Otherwise, slot nulls (JavaScript) or nils (Ruby) where appropriate. A valid array will always be provided.
 * Example:
 * If an array of [1,2,3,4,4,5,5,5] is passed in,
 * the expected output should be: [null, [1,2,3], [4], [5], null, null, null, null, null].
 *
 */
function bucketize(list) {
  const counts = list.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let buckets = new Array(list.length + 1).fill(null);
  for (let key in counts) {
    const value = counts[key];
    (buckets[value] = buckets[value] || []).push(Number(key));
  }
  return buckets;
} 

// function bucketize(list) {
//   let numCountMap = {};
//   let countNumMap = {};
//   let result = [null];
//   list.forEach(num => {
//     numCountMap[num] = numCountMap[num] || 1;
//   });
//   for (let key of Object.keys(numCountMap)) {
//     (countNumMap[numCountMap[key]] = countNumMap[numCountMap[key]] || []).push(Number(key));
//   }
//   for (let i = 1; i <= list.length; i++) {
//     result.push(countNumMap[i] || null);
//   }
//   return result;
// }

module.exports = bucketize;
