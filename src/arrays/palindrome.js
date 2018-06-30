export default function isPalindrome(S) {
  const I = S.replace(/[^\w]/gi, '')
    .toLowerCase()
    .split('');
  while (I.length > 1) {
    if (I.shift() !== I.pop()) {
      return false;
    }
  }
  return true;
}
