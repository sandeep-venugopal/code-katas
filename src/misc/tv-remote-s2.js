/**
 * Second impl of Tv remote prblm
 * @param {*} word
 */
export default function tvRemoteS2(word) {
  let currCor = '0,0';
  const coordinates = buildCoordinates();
  return word.split('').reduce((acc, curr) => {
    const destArray = coordinates[curr].split(',').map(item => Number(item));
    const cArray = currCor.split(',').map(item => Number(item));
    const [destRow, destCol] = destArray;
    const [currRow, currCol] = cArray;
    const colDiff = destCol - currCol;
    const rowDiff = destRow - currRow;
    acc += Math.abs(destRow - currRow) + Math.abs(destCol - currCol) + 1;
    currCor = `${cArray[0] + rowDiff}, ${cArray[1] + colDiff}`;
    return acc;
  }, 0);
}

function buildCoordinates() {
  const keyboard = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
  ];
  return keyboard.reduce((acc, curr, i) => {
    curr.forEach((char, j) => {
      acc[char] = `${i},${j}`;
    });
    return acc;
  }, {});
}
