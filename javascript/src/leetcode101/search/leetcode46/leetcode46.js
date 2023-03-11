/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length <= 0) {
    return []
  }
  const result = []
  backtracking(nums, 0, result)
  return result
}

var backtracking = function (nums, level, result) {
  if (level === nums.length - 1) {
    result.push([...nums])
    return
  }

  for (let i = level; i < nums.length; i++) {
    // 换位置
    let swap = nums[level]
    nums[level] = nums[i]
    nums[i] = swap
    backtracking(nums, level + 1, result)
    swap = nums[level]
    nums[level] = nums[i]
    nums[i] = swap
  }
}

export default permute
