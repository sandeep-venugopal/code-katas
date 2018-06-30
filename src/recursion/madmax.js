/**
 * Mad Max: Recursion Road
 * If you ever had to get the maxiumum number from an array then
 * you are probably familiar with the good old Math.max.apply() function
 * that takes a this argument and an array. A typical implementation would look like this:
 * var myArray = [1, 42, 112, 32, 21]
 * var max = Math.max.apply(null, myArray) //= 112
 * That's too easy though. Let's replace the Math.max function with our own solution that uses recursion! Yay!
 *
 * Rules:
 * You cannot use Math.max (duh!)
 * You can only use const to declare any variables
 * You cannot use any loops like for or while
 * You cannot use any other argument than the one passed to the function
 * If the array is empty then return -Infinity, just like with Math.max.apply(null, [])
 * You cannot use any Array.prototype methods like forEach, map, reduce, filter.
 * Good Luck!
 *
 */
export default function madMax(array, currIndex = 0, maxIndex = 0) {
  if (currIndex === 0 && currIndex === array.length) {
    return -Infinity;
  }
  if (currIndex === array.length) {
    return array[maxIndex];
  }
  if (array[currIndex] > array[maxIndex]) {
    maxIndex = currIndex;
  }
  currIndex += 1;
  return madMax(array, currIndex, maxIndex);
}
