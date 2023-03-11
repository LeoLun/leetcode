/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const lastRemaining = function (n, m) {
  function getNext (arr, m) {
    if (arr.length <= 1) {
      return arr[0]
    }

    const index = m % arr.length
    const after = arr.slice(index - 1)
    after.splice(0, 1)
    arr.splice(index - 1, arr.length - index + 1)
    arr = [...after, ...arr]
    return getNext(arr, m)
  }
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }
  return getNext(arr, m)
}

export default lastRemaining
