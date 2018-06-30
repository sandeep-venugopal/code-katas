/**
 * Write a method highestRank(arr) (or highest-rank in clojure)
 * which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.
 * @param {*} arr
 */
export default function highestRank(arr) {
  let numCounts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] += 1) || 1;
    return acc;
  }, {});
  const sortedKeys = Object.keys(numCounts).sort((a, b) => {
    const diff = numCounts[b] - numCounts[a];
    return diff === 0 ? b - a : diff;
  });
  return Number(sortedKeys[0]);
}
