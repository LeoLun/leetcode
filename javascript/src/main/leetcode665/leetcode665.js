/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  if (nums.length <= 0) {
    return true;
  }

  let flag = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (flag) {
        if (i === 0) {
          nums[i] = nums[i + 1];
        } else if (i > 0 && nums[i + 1] >= nums[i - 1]) {
          nums[i] = nums[i + 1];
        } else {
          nums[i + 1] = nums[i];
        }
        flag = false;
      } else {
        return false;
      }
    }
  }

  return true;
};

export default checkPossibility;
