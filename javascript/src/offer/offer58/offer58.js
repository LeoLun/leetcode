/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const arr = s.split('')
  const base = arr.splice(0, n)
  arr.push(...base)
  return arr.join('')
}

export default reverseLeftWords
