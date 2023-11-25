// function findMax(nums: number[], index: number): number[] {
//   const maxLength = nums.length - 1;
//   const num = nums[index];

//   let max = 0;
//   let maxIndex = index;
//   for (let i = 1; i <= num; i++) {
//     if (index + i <= maxLength) {
//       if (max < nums[index + i] + index + i) {
//         max = nums[index + i] + index + i;
//         maxIndex = index + i;
//       }
//     }
//   }

//   return [max, maxIndex];
// }

// function canJump(nums: number[]): boolean {
//   const { length } = nums;
//   if (length <= 1) {
//     return true;
//   }
//   let index = 0;
//   while (index < length - 1) {
//     const a = findMax(nums, index);
//     let max = 0;
//     [max, index] = a;
//     if (max + 1 >= length) {
//       return true;
//     }
//     if (max === 0) {
//       return false;
//     }
//   }

//   return false;
// }

// 官方解法
function canJump(nums: number[]): boolean {
  const n = nums.length;

  let rightmost = 0;

  for (let i = 0; i < n; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= n - 1) {
        return true;
      }
    }
  }

  return false;
}

export default canJump;
