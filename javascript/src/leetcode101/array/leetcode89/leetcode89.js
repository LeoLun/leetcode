/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function (n) {
  if (n === 0) {
    return [0]
  }
  let result = ['0', '1']
  for (let i = 1; i < n; i++) {
    const newResult = []
    for (let j = 0; j < result.length; j++) {
      newResult.push('0' + result[j])
    }
    for (let j = result.length - 1; j >= 0; j--) {
      newResult.push('1' + result[j])
    }
    result = newResult
  }
  return result.map((item) => {
    return parseInt(item, 2)
  })
}

export default grayCode
