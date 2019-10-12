/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let val = 0;
  val = Number((Math.abs(x) + '').split('').reverse().join(''))
  if (val > Math.pow(2, 31) - 1) {
    return 0;
  }
  return x >= 0 ? val : -val
};
console.log(reverse(-120))
console.log('123: ', 123);