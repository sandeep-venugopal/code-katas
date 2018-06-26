/**
 * Sum of Digits / Digital Root
 * In this kata, you must create a digital root function.
 *
 * A digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n.
 * If that value has two digits, continue reducing in this way
 * until a single-digit number is produced.
 * This is only applicable to the natural numbers.
 *
 * For Ex: digital_root(16)
 * => 1 + 6
 * => 7
 * digital_root(942)
 * => 9 + 4 + 2
 * => 15
 * => 1 + 5
 * => 6
 *
 */
function digitalRoot(n) {
  let sum = n
    .toString()
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
  return sum < 10 ? sum : digitalRoot(sum);
}

// function digitalRoot(n) {
//   return ((n - 1) % 9) + 1;
// }

module.exports = digitalRoot;
