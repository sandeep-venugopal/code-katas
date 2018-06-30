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
export default function bucketize(list) {
  // eslint-disable-next-line no-console
  // console.log('Inside Bucketize');
  let counts = list.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const buckets = new Array(list.length + 1).fill(null);
  Object.keys(counts).forEach(key => {
    const value = counts[key];
    (buckets[value] = buckets[value] || []).push(Number(key));
  });
  return buckets;
}
