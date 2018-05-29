/**
 * Given an array of intgers , Find the minimum sum which is obtained 
 * from summing each Two integers product .
 * Array/list will contain positives only . 
 * Array/list will always has even size
 * minSum({5,4,2,3}) ==> return (22)
 */

//  function minSum(arr) {
//    return arr.sort((a, b) => a - b).reduce((acc, curr, index, o) => {
//     return acc + curr * o[o.length - 1 - index];
//    }, 0) / 2;
//  }


function minSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let sum = 0;
  while (sortedArray.length) {
    sum += sortedArray.shift() * sortedArray.pop();
  }
  return sum;
}

module.exports = minSum;