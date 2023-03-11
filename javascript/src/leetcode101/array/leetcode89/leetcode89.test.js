import leetcode89 from './leetcode89.js'

test('grayCode', () => {
  expect(leetcode89(2)).toEqual([0, 1, 3, 2])
  expect(leetcode89(0)).toEqual([0])
  expect(leetcode89(1)).toEqual([0, 1])
})
