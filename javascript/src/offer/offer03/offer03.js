/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (arr[item]) {
      return item
    } else {
      arr[item] = true
    }
  }
}

export default findRepeatNumber
