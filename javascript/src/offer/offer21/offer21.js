/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const r1 = []
  const r2 = []
  nums.forEach((num) => {
    if (num % 2) {
      r1.push(num)
    } else {
      r2.push(num)
    }
  })
  return [...r1, ...r2]
}

export default exchange
