import merge from './leetcode88';

test('merge', () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);

  const nums2 = [1];
  merge(nums2, 1, [], 0);
  expect(nums2).toEqual([1]);

  const nums3 = [0];
  merge(nums3, 0, [1], 1);
  expect(nums3).toEqual([1]);

  const nums4 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
  merge(nums4, 6, [1, 2, 2], 3);
  expect(nums4).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
});
