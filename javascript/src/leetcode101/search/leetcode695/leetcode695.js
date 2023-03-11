/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const maxRow = grid.length
  const maxColumn = maxRow ? grid[0].length : 0
  // 当前岛屿的面积
  let localArea = 0
  // 遍历过的岛屿最大面积
  let maxArea = 0
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      // 如果当前位置存在岛屿
      if (grid[i][j]) {
        localArea = 1
        grid[i][j] = 0
        let gridStack = [{ i, j }]
        while (gridStack.length) {
          // 从栈中取出一个值
          const { i: cI, j: cJ } = gridStack.pop()
          // 遍历其周围是否存在陆地
          // 检查上方
          if (cI - 1 >= 0 && grid[cI - 1][cJ]) {
            grid[cI - 1][cJ] = 0
            gridStack.push({ i: cI - 1, j: cJ })
            localArea++
          }
          // 检查右方
          if (cJ + 1 < maxColumn && grid[cI][cJ + 1]) {
            grid[cI][cJ + 1] = 0
            gridStack.push({ i: cI, j: cJ + 1 })
            localArea++
          }
          // 检查下方
          if (cI + 1 < maxRow && grid[cI + 1][cJ]) {
            grid[cI + 1][cJ] = 0
            gridStack.push({ i: cI + 1, j: cJ })
            localArea++
          }
          // 检查左方
          if (cJ - 1 >= 0 && grid[cI][cJ - 1]) {
            grid[cI][cJ - 1] = 0
            gridStack.push({ i: cI, j: cJ - 1 })
            localArea++
          }
        }
        maxArea = Math.max(maxArea, localArea)
      }
    }
  }

  return maxArea
}

export default maxAreaOfIsland
