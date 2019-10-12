/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let ret = '';
  let first = 0;
  while (str[first] == ' ') {
    first++;
  }
  if (str[first] === '-' || str[first] === '+' || !isNaN(+str[first])) {
    if (str[first] === '-' || str[first] === '+') {
      ret += str[first++]
    }
    if (!isNaN(str[first])) {
      for (let i = first; i < str.length; i++) {
        if (isNaN(+str[i]) || str[i] == ' ') {
          break;
        } else {
          ret += str[i]
        }
      }
    } else {
      ret = ''
    }
  }
  ret = +ret
  if (ret > 0x7FFFFFFF) {
    return 0x7FFFFFFF
  } else if (ret < -0x80000000) {
    return -0x80000000
  }
  if (isNaN(ret)) {
    return 0
  }
  return ret
};

console.log(' ', myAtoi("   +0 123"));
console.log(' ', '0');

var myAtoi_2 = function (str) { 
  const val = str.trim().match(/(\+|-){0,1}\d+/)
}