/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let queue = []
  for (let i = 0; i < p.length; i++) {
    if (p[i + 1] == '*') {
      queue.push(i)
    }
  }
  let ip = 0;
  for (let is = 0; is < s.length; is++) {
    if (ip === 0)
    if (s[is] !== p[ip]) {
      if (queue[0] === ip) {
        queue.shift()
        is--
      } else {
        return false
      }
    } else {
      if (queue[0] === ip) {
        ip--
      }
    }
  }
};

isMatch('aa')