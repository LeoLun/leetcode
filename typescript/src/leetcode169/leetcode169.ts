function majorityElement(nums: number[]): number {
  let count = 0;
  let result: number = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (count === 0) {
      result = num;
    }
    count += ((num === result) ? 1 : -1);
  }

  return result;
}

export default majorityElement;
