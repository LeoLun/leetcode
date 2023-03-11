/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function (deck) {
  // 排序
  deck = deck.sort()
  // 分组
  let i = 0
  const sortGroup = []
  deck.forEach(item => {
    if (!sortGroup[i]) {
      sortGroup[i] = [item]
    } else {
      if (sortGroup[i][0] === item) {
        sortGroup[i].push(item)
      } else {
        i++
        sortGroup[i] = [item]
      }
    }
  })
  // 找到最长的那个
  let max = 0
  sortGroup.forEach(item => {
    if (item.length > max) {
      max = item.length
    }
  })
  // 查看是否存在一个非1的数可以整除所以数组的长度
  for (let i = 2; i <= max; i++) {
    const check = sortGroup.every(item => {
      return item.length % i === 0
    })
    if (check) {
      return true
    }
  }
  return false
}

export default hasGroupsSizeX
