/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  // 第一次使用快排，后面使用插入就好
  quickSort(stones, 0, stones.length);
  while (stones.length > 1) {
    // 找到两个最大的
    const maxA = stones.pop();
    const maxB = stones.pop();
    const next = maxA - maxB;
    if (next > 0) {
      // 需要重新插入stones中
      stones.unshift(next);
      for (let i = 1; i < stones.length; i++) {
        if (stones[i] < stones[i - 1]) {
          const swap = stones[i];
          stones[i] = stones[i - 1];
          stones[i - 1] = swap;
        } else {
          // 因为之前已经排好序了，只要出现一个不用交换的，就完成排序了
          break;
        }
      }
    }
  }

  if (stones.length) {
    return stones[0];
  }
  return 0;
};

var quickSort = function (nums, l, r) {
  if (l + 1 >= r) {
    return;
  }

  let first = l;
  let last = r - 1;
  const key = nums[l];
  while (first < last) {
    while (first < last && nums[last] >= key) {
      last--;
    }
    nums[first] = nums[last];
    while (first < last && nums[first] <= key) {
      first++;
    }
    nums[last] = nums[first];
  }
  nums[first] = key;
  quickSort(nums, l, first);
  quickSort(nums, first + 1, r);
};

export default lastStoneWeight;
