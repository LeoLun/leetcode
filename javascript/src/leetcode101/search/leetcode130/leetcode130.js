/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const maxRow = board.length
  const maxColumn = maxRow ? board[0].length : 0

  const result = new Array(maxRow)
  for (let i = 0; i < maxRow; i++) {
    result[i] = new Array(maxColumn)
    result[i].fill('X')
  }

  // 对四条边的 O 进行深度搜索，搜索完成就是答案
  for (let i = 0; i < maxRow; i++) {
    if (board[i][0] === 'O' && result[i][0] === 'X') {
      dfs(result, board, maxRow, maxColumn, i, 0)
    }
    if (board[i][maxColumn - 1] === 'O' && result[i][maxColumn - 1] === 'X') {
      dfs(result, board, maxRow, maxColumn, i, maxColumn - 1)
    }
  }

  // 对四条边的 O 进行深度搜索，搜索完成就是答案
  for (let i = 0; i < maxColumn; i++) {
    if (board[0][i] === 'O' && result[0][i] === 'X') {
      dfs(result, board, maxRow, maxColumn, 0, i)
    }
    if (board[maxRow - 1][i] === 'O' && result[maxRow - 1][i] === 'X') {
      dfs(result, board, maxRow, maxColumn, maxRow - 1, i)
    }
  }

  board.length = 0
  board.push(...result)
}

var dfs = function (result, board, maxRow, maxColumn, x, y) {
  if (x < 0 || x >= maxRow || y < 0 || y >= maxColumn) {
    return
  }

  if (board[x][y] === 'X' || result[x][y] === 'O') {
    return
  }

  result[x][y] = 'O'

  dfs(result, board, maxRow, maxColumn, x + 1, y)
  dfs(result, board, maxRow, maxColumn, x - 1, y)
  dfs(result, board, maxRow, maxColumn, x, y + 1)
  dfs(result, board, maxRow, maxColumn, x, y - 1)
}

export default solve
