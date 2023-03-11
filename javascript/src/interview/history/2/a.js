/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  // 按着 . 切割字符
  const v1Array = version1.split('.')
  const v2Array = version2.split('.')

  const maxLength = Math.max(v1Array.length, v2Array.length)

  // 每层比较
  for (let i = 0; i < maxLength; i++) {
    const num1 = v1Array[i] ? +v1Array[i] : 0
    const num2 = v2Array[i] ? +v2Array[i] : 0

    // 转换为数字比较大小
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

export default compareVersion
