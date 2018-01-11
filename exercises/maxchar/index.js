// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let answer = {};
  for (let i = 0; i < str.length; i++) {
    if (answer[str[i]] === undefined) {
      answer[str[i]] = 1;
    } else {
      answer[str[i]] = answer[str[i]] + 1
    }
  }
  let highValue = 0;
  let highKey = '';
  for (key in answer) {
    if (answer[key] > highValue) {
      highValue = answer[key];
      highKey = key;
    }
  }

  return highKey;
}

module.exports = maxChar;
