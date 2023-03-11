
// 给定一个只包含 "()[]{}"
// 六种字符的字符串。规定它们的优先级由外至内为："{}", "[]", "()"，同一级的可以嵌套，并列。
// 要求判断给定的字符串是否是合法的括号字串？
// 例："()", "{((()())())[()]}()" 是合法的。"())", "([])", "())(()" 都是不合法的。

// "{((()())())[()]}()"

/**
 * 判断字符是否合法
 * @param {String} str
 */
var check = function (str) {
  const maxLength = str.length

  const arr = []

  for (let i = 0; i < maxLength; i++) {
    const currentChar = str[i]
    const currentLength = arr.length
    const preChar = arr[currentLength - 1]

    if (currentChar === '{') {
      if (!preChar || ['{'].includes(preChar)) {
        arr.push(currentChar)
      } else {
        return false
      }
    } else if (currentChar === '}') {
      if (preChar && preChar === '{') {
        arr.pop()
      } else {
        return false
      }
    } else if (currentChar === '[') {
      if (!preChar || ['{', '['].includes(preChar)) {
        arr.push(currentChar)
      } else {
        return false
      }
    } else if (currentChar === ']') {
      if (preChar && preChar === '[') {
        arr.pop()
      } else {
        return false
      }
    } else if (currentChar === '(') {
      if (!preChar || ['{', '[', '('].includes(preChar)) {
        arr.push(currentChar)
      } else {
        return false
      }
    } else if (currentChar === ')') {
      if (preChar && preChar === '(') {
        arr.pop()
      } else {
        return false
      }
    }
  }

  if (arr.length === 0) {
    return true
  }

  return false
}

export default check
