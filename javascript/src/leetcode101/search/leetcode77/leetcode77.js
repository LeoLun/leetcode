/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  const comb = []
  backtracking(result, comb, 0, 1, n, k)
  return result
}

var backtracking = function (result, comb, count, pos, n, k) {
  if (count === k) {
    result.push([...comb])
    return
  }

  for (let i = pos; i <= n; i++) {
    comb[count] = i
    count++
    backtracking(result, comb, count, i + 1, n, k)
    count--
  }
}

export default combine
