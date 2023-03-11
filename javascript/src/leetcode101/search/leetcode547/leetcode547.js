/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  const maxRow = M.length
  const maxColumn = maxRow ? M[0].length : 0
  let count = 0
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      if (M[i][j]) {
        count++
        M[i][j] = 0
        // 找到该同学全部关联的同学，置为0
        let mStack = [{ x: i, y: j }]
        while (mStack.length) {
          const { x, y } = mStack.pop()
          // 遍历该同学相交的所有同学
          // 列遍历
          for (let q = 0; q < maxRow; q++) {
            if (M[q][y]) {
              M[q][y] = 0
              mStack.push({ x: q, y })
            }
          }
          // 行遍历
          for (let p = 0; p < maxColumn; p++) {
            if (M[x][p]) {
              M[x][p] = 0
              mStack.push({ x, y: p })
            }
          }
          // 除了上面把行列都遍历了，还可以根据对角线都是1, 生成的图是对称的这两个特性进行遍历
          // 特性1: M[i][i] == 1
          // 特性2: M[i][j] == M[j][i]
          // for (let q = 0; q < maxRow; q++) {
          //   if (M[q][y]) {
          //     M[q][y] = 0
          //     M[y][q] = 0
          //     M[q][q] = 0
          //     mStack.push({ x: q, y })
          //     mStack.push({ x: q, y: q })
          //   }
          // }
        }
      }
    }
  }
  return count
}

export default findCircleNum
