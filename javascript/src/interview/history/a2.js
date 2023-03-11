// 1. 实现一个方法decodeStr，输入一个字符串，根据约定规则输出编码结果。约定规则如下：
// 场景1：str = "2[a]1[bc]", 返回 "aabc".
// 场景2：str = "2[e2[d]]", 返回 "eddedd".
// 场景3：str = "3[abc]2[cd]ff", 返回 "abcabcabccdcdff".
// 可以看出: N[string]，表示string 正好重复 N 次。假设字符串一定是有效正确的字符串
// (能写一个通用方法处理3种场景最好 写不出可以备注支持哪种场景)

/**
 * @param {string} str
 * @return {number}
 */
var decodeStr = function (str) {
  if (!str) {
    return ''
  }
  const rootToken = {
    num: '',
    child: []
  }
  let currentToken = rootToken
  const len = str.length
  let tokenNum = ''
  for (let i = 0; i < len; i++) {
    const cChar = str[i]
    // 如果是数字
    if (!isNaN(parseInt(cChar))) {
      tokenNum += cChar
    } else if (cChar === '[') {
      // 创建一个新的Token，使当前Token为新Token
      const newToken = {
        num: tokenNum,
        child: [],
        parent: currentToken
      }
      tokenNum = ''
      currentToken.child.push(newToken)
      currentToken = newToken
    } else if (cChar === ']') {
      tokenNum = ''
      const parent = currentToken.parent
      const sub = currentToken.child.join('')
      let subResult = ''
      const num = currentToken.num ? +currentToken.num : 1
      for (let i = 0; i < num; i++) {
        subResult += sub
      }
      parent.child.pop()
      parent.child.push(subResult)
      currentToken = parent
    } else {
      tokenNum = ''
      currentToken.child.push(cChar)
    }
  }
  return rootToken.child.join('')
}

export default decodeStr
