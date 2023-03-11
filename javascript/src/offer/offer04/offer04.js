/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) {
    return false
  }
  const n = matrix.length - 1
  const m = matrix[n].length - 1
  let i = n
  let j = m
  let maxI = i
  let maxJ = j
  let minI = 0
  let minJ = 0
  let nextI = -1
  let nextJ = -1
  if (matrix[0][0] === target) {
    return true
  }
  while ((nextI !== 0 && nextJ !== 0)) {
    if (matrix[i][j] === target) {
      return true
    }

    if (matrix[i][j] > target) {
      maxI = i
      maxJ = j
    }

    if (matrix[i][j] < target) {
      minI = i
      minJ = j
    }

    // 下一个为 minI 到 maxI 中间
    nextI = parseInt((maxI - minI) / 2)
    nextJ = parseInt((maxJ - minJ) / 2)
    if (nextI !== 0 || nextJ !== 0) {
      i = minI + nextI
      j = minJ + nextJ
    }
  }

  // 循环最大值所在行列
  for (j = 0; j < maxJ; j++) {
    if (matrix[maxI][j] === target) {
      return true
    }
  }

  for (i = minI + 1; i <= n; i++) {
    for (j = 0; j < maxJ; j++) {
      if (matrix[i][j] === target) {
        return true
      }
    }
  }

  for (i = 0; i < maxI; i++) {
    for (j = maxJ + 1; j <= m; j++) {
      if (matrix[i][j] === target) {
        return true
      }
    }
  }

  return false
}

export default findNumberIn2DArray
