/**
 * My TV remote control has arrow buttons and an OK button.
 * The screen "keyboard" layout looks like this
 * a	b	c	d	e	1	2	3
 * f	g	h	i	j	4	5	6
 * k	l	m	n	o	7	8	9
 * p	q	r	s	t	.	@	0
 * u	v	w	x	y	z	_	/
 *
 * How many button presses on my remote are required to type a given word?
 * Notes:
 *   - The cursor always starts on the letter a (top left)
 *   - Remember to also press OK to "accept" each letter.
 *   - Take a direct route from one letter to the next
 *   - The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
 * Example:
 * word = codewars
 *   c => a-b-c-OK = 3
 *   o => c-d-e-j-o-OK = 5
 *   d => o-j-e-d-OK = 4
 *   e => d-e-OK = 2
 *   w => e-j-o-t-y-x-w-OK = 7
 *   a => w-r-m-h-c-b-a-OK = 7
 *   r => a-f-k-p-q-r-OK = 6
 *   s => r-s-OK = 2
 *
 * Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36
 */
function tvRemote(word) {
  let currCor = '0,0';
  const coordinates = buildCoordinates();
  return word.split('').reduce((acc, curr) => {
    const destArray = coordinates[curr].split(',').map(item => Number(item));
    const cArray = currCor.split(',').map(item => Number(item));
    const [destRow, destCol] = destArray;
    const [currRow, currCol] = cArray;
    const colDiff = destCol - currCol;
    const rowDiff = destRow - currRow;
    if (colDiff > 0) {
      acc += colDiff;
      cArray[1] += colDiff;
    } else if (colDiff < 0) {
      cArray[1] += colDiff;
      acc += -1 * colDiff;
    }
    if (rowDiff > 0) {
      acc += rowDiff;
      cArray[0] += rowDiff;
    } else if (rowDiff < 0) {
      cArray[0] += rowDiff;
      acc += -1 * rowDiff;
    }
    acc += 1;
    currCor = cArray.join(',');
    return acc;
  }, 0);
}

function buildCoordinates() {
  const row0 = ['a', 'b', 'c', 'd', 'e', '1', '2', '3'];
  const row1 = ['f', 'g', 'h', 'i', 'j', '4', '5', '6'];
  const row2 = ['k', 'l', 'm', 'n', 'o', '7', '8', '9'];
  const row3 = ['p', 'q', 'r', 's', 't', '.', '@', '0'];
  const row4 = ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'];
  const layout = [row0, row1, row2, row3, row4];
  return layout.reduce((acc, curr, i) => {
    curr.forEach((char, j) => {
      acc[char] = `${i},${j}`;
    });
    return acc;
  }, {});
}

module.exports = tvRemote;
