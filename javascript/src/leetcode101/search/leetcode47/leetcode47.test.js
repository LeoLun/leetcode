import permuteUnique from './leetcode47'

test('permuteUnique', () => {
  expect(permuteUnique([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2]
  ])
})
