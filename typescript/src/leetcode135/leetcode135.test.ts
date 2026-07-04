import candy from './leetcode135';

test('candy', () => {
  expect(candy([1, 0, 2])).toEqual(5);
  expect(candy([1, 2, 2])).toEqual(4);
  expect(candy([1])).toEqual(1);
  expect(candy([1, 2, 3])).toEqual(6);
  expect(candy([3, 2, 1])).toEqual(6);
});
