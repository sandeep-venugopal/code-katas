/**
 * Write a method highestRank(arr) (or highest-rank in clojure)
 * which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.
 * @param {*} arr
 */
function highestRank(arr) {
  let numCounts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] += 1) || 1;
    return acc;
  }, {});
  const sortedKeys = Object.keys(numCounts).sort((a, b) => {
    const diff = numCounts[b] - numCounts[a];
    return diff === 0 ? b - a : diff;
  });
  return sortedKeys[0];
}

// function highestRank(arr) {
//   let numCounts = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] += 1) || 1;
//     return acc;
//   }, {});
//   let higestRankNum = 0;
//   let highestRankNumCount = 0;
//   Object.keys(numCounts)
//     .sort((a, b) => a - b)
//     .forEach(key => {
//       const value = numCounts[key];
//       if (value >= highestRankNumCount) {
//         highestRankNumCount = value;
//         higestRankNum = key;
//       }
//     });
//   return +higestRankNum;
// }

module.exports = highestRank;
