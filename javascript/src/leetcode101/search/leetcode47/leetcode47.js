/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length <= 0) {
    return []
  }
  const result = []
  backtracking(nums, 0, result)
  console.log('result', result)
  return result
}

var backtracking = function (nums, level, result) {
  if (level === nums.length - 1) {
    result.push([...nums])
    return
  }

  for (let i = level; i < nums.length; i++) {
    // if (nums[level] === nums[i]) {
    //   continue
    // }
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

export default permuteUnique
