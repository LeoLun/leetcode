/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  // 反向找可以流向太平洋的地方和可以流向大西洋地方，同时可以流向的就是答案
  const maxRow = matrix.length
  const maxColumn = maxRow ? matrix[0].length : 0

  // 初始化图
  let target = []
  let canSearchP = []
  let canSearchA = []
  for (let i = 0; i < maxRow; i++) {
    target[i] = []
    canSearchP[i] = []
    canSearchA[i] = []
    for (let j = 0; j < maxColumn; j++) {
      target[i][j] = 0
      canSearchP[i][j] = 1
      canSearchA[i][j] = 1
    }
  }
  // 遍历四条边就够了
  for (let j = 0; j < maxColumn; j++) {
    dfs(matrix, canSearchP, maxRow, maxColumn, target, 0, j)
    dfs(matrix, canSearchA, maxRow, maxColumn, target, maxRow - 1, j)
  }

  for (let i = 0; i < maxRow; i++) {
    dfs(matrix, canSearchP, maxRow, maxColumn, target, i, 0)
    dfs(matrix, canSearchA, maxRow, maxColumn, target, i, maxColumn - 1)
  }

  // [
  //   [ 1, 1, 1, 1, 2 ],
  //   [ 1, 1, 1, 2, 2 ],
  //   [ 1, 1, 2, 1, 1 ],
  //   [ 2, 2, 1, 1, 1 ],
  //   [ 2, 1, 1, 1, 1 ]
  // ]

  let result = []
  // 返回 target 里面等于 2 的
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      if (target[i][j] === 2) {
        result.push([i, j])
      }
    }
  }

  return result
}

const dfs = function (matrix, canSearch, maxRow, maxColumn, target, x, y) {
  if (canSearch[x][y]) {
    target[x][y]++
    canSearch[x][y] = 0
  }
  let riverStack = [{ x, y }]
  while (riverStack.length) {
    const { x, y } = riverStack.pop()
    const current = matrix[x][y]
    // 寻找周围是否存着大于等于 current 的
    // 检查上方
    if (x - 1 >= 0 && canSearch[x - 1][y] && current <= matrix[x - 1][y]) {
      canSearch[x - 1][y] = 0
      target[x - 1][y]++
      riverStack.push({ x: x - 1, y })
    }
    // 检查右方
    if (y + 1 < maxColumn && canSearch[x][y + 1] && current <= matrix[x][y + 1]) {
      canSearch[x][y + 1] = 0
      target[x][y + 1]++
      riverStack.push({ x, y: y + 1 })
    }
    // 检查下方
    if (x + 1 < maxRow && canSearch[x + 1][y] && current <= matrix[x + 1][y]) {
      canSearch[x + 1][y] = 0
      target[x + 1][y]++
      riverStack.push({ x: x + 1, y })
    }
    // 检查左方
    if (y - 1 >= 0 && canSearch[x][y - 1] && current <= matrix[x][y - 1]) {
      canSearch[x][y - 1] = 0
      target[x][y - 1]++
      riverStack.push({ x, y: y - 1 })
    }
  }
}

export default pacificAtlantic
