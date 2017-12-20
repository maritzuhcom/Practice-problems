// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reduce((acc, nextNum) => {
    acc = nextNum + acc;
    return acc;
  }, '');

  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

module.exports = palindrome;
