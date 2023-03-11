/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  return /^(\w+)\1+$/.test(s)
}

export default repeatedSubstringPattern
