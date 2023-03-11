import lastStoneWeight from './leetcode1046';

test('lastStoneWeight', () => {
  expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toEqual(1);
  expect(lastStoneWeight([2, 8, 2, 1, 8, 1])).toEqual(0);
});
