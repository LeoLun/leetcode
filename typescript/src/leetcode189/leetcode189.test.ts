import rotate from './leetcode189';

test('rotate', () => {
  const test1 = [1, 2, 3, 4, 5, 6, 7];
  rotate(test1, 3);
  expect(test1).toEqual([5, 6, 7, 1, 2, 3, 4]);

  const test2 = [-1, -100, 3, 99];
  rotate(test2, 2);
  expect(test2).toEqual([3, 99, -1, -100]);

  const test3 = [1, 2];
  rotate(test3, 5);
  expect(test3).toEqual([2, 1]);
});
