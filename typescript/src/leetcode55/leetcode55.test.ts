import canJump from './leetcode55';

test('canJump', () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
  expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
});
