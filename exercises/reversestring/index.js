// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let answer = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     answer = answer + str[i];
//   }
//   return answer;
// }
//
  function reverse(str) {
    const ans = str.split('').reduce((acc, next) => {
      acc = next + acc
      return acc;
    }, '');

    return ans;
  }

module.exports = reverse;
