import leetcode914 from './leetcode914.js'

test('hasGroupsSizeX', () => {
  expect(leetcode914([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
  expect(leetcode914([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
  expect(leetcode914([1])).toBe(false)
  expect(leetcode914([1, 1])).toBe(true)
  expect(leetcode914([1, 1, 2, 2, 2, 2])).toBe(true)
  expect(leetcode914([1, 1, 1, 1, 1, 1, 2, 2, 2, 2])).toBe(true)
})
