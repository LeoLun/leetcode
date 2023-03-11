// 2..versionCompare()
// Semantic Versioning 是一个前端通用的版本规范。格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，要求实现 compare(a, b) 方法，比较 a, b 两个版本大小，
//   1. 当 a > b 是返回 1；
//   2. 当 a = b 是返回 0；
//   3. 当 a < b 是返回 -1；
//   4. 其中，rc > beta > alpha，major > minor > patch；
//   5. 例子，1.2.3 < 1.2.4 < 1.3.0.alpha.1 < 1.3.0.alpha.2 < 1.3.0.beta.1 < 1.3.0.rc.1 < 1.3.0

/**
 * 比较版本号
 * @param {string} a 版本号1
 * @param {string} b 版本号2
 */
const compare = function (a, b) {
  const alist = a.split('.')
  const blist = b.split('.')
  const maxLength = Math.max(alist.length, b.length)
  const isNumber = (str) => {
    return !isNaN(+str)
  }
  const test = {
    alpha: 0,
    beta: 1,
    rc: 2
  }

  for (let i = 0; i < maxLength; i++) {
    let aCurrent = alist[i]
    let bCurrent = blist[i]

    if (!aCurrent) {
      return 1
    }

    if (!bCurrent) {
      return -1
    }

    if (isNumber(aCurrent) && isNumber(bCurrent)) {
      if (aCurrent > bCurrent) {
        return 1
      }
      if (bCurrent > aCurrent) {
        return -1
      }
    } else {
      aCurrent = test[aCurrent]
      bCurrent = test[bCurrent]

      if (aCurrent > bCurrent) {
        return 1
      }
      if (bCurrent > aCurrent) {
        return -1
      }
    }
  }

  return 0
}

export default compare
