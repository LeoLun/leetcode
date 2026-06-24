function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) >= 0) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
}

// function twoSum(nums: number[], target: number): number[] {
//   let j = 0;

//   for (let i = 0; i < nums.length; i++) {
//     j = i + 1;
//     for (; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }

export default twoSum;
