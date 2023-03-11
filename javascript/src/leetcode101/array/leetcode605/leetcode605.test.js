import leetcode605 from './leetcode605.js'

test('canPlaceFlowers', () => {
  expect(leetcode605([1, 0, 0, 0, 1], 1)).toBe(true)
  expect(leetcode605([1, 0, 0, 0, 1], 2)).toBe(false)
})
