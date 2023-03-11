/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const numToLetter = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  const combination = function (arr1, arr2) {
    const result = []
    arr1.forEach(item1 => {
      arr2.forEach(item2 => {
        result.push(item1 + item2)
      })
    })
    return result
  }

  const numberArr = digits.split('')
  if (numberArr.length === 0) {
    return []
  }
  const letterArr = numberArr.map((item) => {
    return numToLetter[item - 2]
  })
  let result = letterArr[0]
  for (let i = 1; i < letterArr.length; i++) {
    result = combination(result, letterArr[i])
  }

  // 这里还可以用递归 + splice完成
  return result
}

export default letterCombinations
