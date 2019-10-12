/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = ''
  if (numRows === 1) {
    return s
  }
  let addNum = 2 * (numRows - 1) || 1
  for (let i = 0; i < numRows; i++) {
    let n = i;
    while (n < s.length) {
      result += s[n]
      let mid = n + 2 * (numRows - i - 1)
      if (mid !== 0 && mid < s.length && mid > n + 1 && mid < n + addNum) {
        result += s[mid]
      }
      n += addNum;
    }
  }
  return result
};

console.log(convert('', 1))
console.log("a")