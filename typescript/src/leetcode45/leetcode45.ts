function findMax(nums: number[], index: number): number[] {
  const maxLength = nums.length - 1;
  const num = nums[index];

  let max = 0;
  let maxIndex = index;
  for (let i = 1; i <= num; i++) {
    if (index + i <= maxLength) {
      if (max < nums[index + i] + index + i) {
        max = nums[index + i] + index + i;
        maxIndex = index + i;
      }
    }
  }

  return [max, maxIndex];
}

function jump(nums: number[]): number {
  const { length } = nums;
  if (length <= 1) {
    return 0;
  }

  if (nums[0] + 1 >= length) {
    return 1;
  }

  let result = 1;
  let index = 0;
  while (index < length - 1) {
    result++;
    const a = findMax(nums, index);
    let max = 0;
    [max, index] = a;
    if (max + 1 >= length) {
      return result;
    }
    if (max === 0) {
      return 0;
    }
  }

  return 0;
}

export default jump;
