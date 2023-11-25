import removeDuplicates from './leetcode80';

test('removeDuplicates', () => {
  expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toEqual(5);
  expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual(7);
});
