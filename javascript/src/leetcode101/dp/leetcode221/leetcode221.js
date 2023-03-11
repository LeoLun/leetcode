/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0
  }

  const n = matrix.length
  const m = matrix[0].length
  let dp = Array(n + 1).fill(0)
  dp = dp.map(() => {
    return Array(m + 1).fill(0)
  })
  let max = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (+matrix[i - 1][j - 1] === 1) {
        // 获取旁边最小值 + 1
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
      if (dp[i][j] > max) {
        max = dp[i][j]
      }
    }
  }
  return max * max
}

export default maximalSquare
