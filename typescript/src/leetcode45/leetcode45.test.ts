import jump from './leetcode45';

test('jump', () => {
  expect(jump([2, 3, 1, 1, 4])).toEqual(2);
  expect(jump([2, 3, 0, 1, 4])).toEqual(2);
  expect(jump([1, 2])).toEqual(1);
});
