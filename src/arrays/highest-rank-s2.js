/**
 *
 * This is the second solution for the highestRank problem
 */
export default function highestRankS2(arr) {
  let numCounts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] += 1) || 1;
    return acc;
  }, {});
  let higestRankNum = 0;
  let highestRankNumCount = 0;
  Object.keys(numCounts)
    .sort((a, b) => a - b)
    .forEach(key => {
      const value = numCounts[key];
      if (value >= highestRankNumCount) {
        highestRankNumCount = value;
        higestRankNum = key;
      }
    });
  return +higestRankNum;
}
