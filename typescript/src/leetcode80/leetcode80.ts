function removeDuplicates(nums: number[]): number {
  let { length } = nums;
  if (length <= 2) {
    return length;
  }

  let index = 0;
  let target = nums[0];

  for (let i = 0; i < length; i++) {
    if (nums[i] === target) {
      if (index >= 2) {
        nums.splice(i, 1);
        i -= 1;
        length = nums.length;
      } else {
        index += 1;
      }
    } else {
      target = nums[i];
      index = 1;
    }
  }
  return length;
}

export default removeDuplicates;
