/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (k === 0) return;
  let target;
  for (let i = 0; i < k; i++) {
    target = nums.pop() as number;
    nums.unshift(target);
  }
}

export default rotate;
