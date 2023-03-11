function singleNumber(nums: number[]): number {
  return nums.reduce((accumulator, currentValue) => accumulator ^ currentValue, 0);
}

export default singleNumber;
