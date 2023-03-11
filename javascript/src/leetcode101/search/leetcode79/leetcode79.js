/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var find = false

var exist = function (board, word) {
  find = false
  const maxRow = board.length
  const maxColumn = maxRow ? board[0].length : 0

  const searchMap = []
  for (let i = 0; i < maxRow; i++) {
    searchMap[i] = new Array(maxColumn)
    searchMap[i].fill(false)
  }

  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      backtracking(board, word, i, j, 0, maxRow, maxColumn, searchMap)
    }
  }
  return find
}

/**
 *
 * @param {[]} board
 * @param {string} word
 * @param {number} x
 * @param {number} y
 * @param {number} level
 * @param {number} maxRow
 * @param {number} maxColumn
 */
var backtracking = function (board, word, x, y, level, maxRow, maxColumn, searchMap) {
  // 如果超出位置则返回
  if (x >= maxRow || y >= maxColumn || x < 0 || y < 0) {
    return
  }
  // 如果位置不相等则返回
  if (searchMap[x][y] || find || board[x][y] !== word[level]) {
    return
  }
  // 如果长度相等则设置 find 为true
  // 因为前面的判断保证查找完毕了
  if (level === word.length - 1) {
    find = true
    return
  }

  searchMap[x][y] = true
  backtracking(board, word, x + 1, y, level + 1, maxRow, maxColumn, searchMap)
  backtracking(board, word, x - 1, y, level + 1, maxRow, maxColumn, searchMap)
  backtracking(board, word, x, y + 1, level + 1, maxRow, maxColumn, searchMap)
  backtracking(board, word, x, y - 1, level + 1, maxRow, maxColumn, searchMap)
  searchMap[x][y] = false
}

export default exist
