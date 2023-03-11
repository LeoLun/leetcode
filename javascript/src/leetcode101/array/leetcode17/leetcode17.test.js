import leetcode17 from './leetcode17.js'

test('letterCombinations', () => {
  const result = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  expect(leetcode17('23')).toEqual(result)
  expect(leetcode17('')).toEqual([])
  expect(leetcode17('2')).toEqual(['a', 'b', 'c'])
})
