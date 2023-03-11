/**
 * @param {string} s
 * @return {string}
 */
var firstUniqChar = function (s) {
  const map = []
  for (let i = 0; i < s.length; i++) {
    const key = s[i]
    if (map[key]) {
      map[key]++
    } else {
      map[key] = 1
    }
  }

  let result = ' '
  const keys = Object.keys(map)
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === 1) {
      return (result = keys[i])
    }
  }
  return result
}

export default firstUniqChar
