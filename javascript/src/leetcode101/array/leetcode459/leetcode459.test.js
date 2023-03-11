import leetcode459 from './leetcode459.js'

test('repeatedSubstringPattern', () => {
  expect(leetcode459('abab')).toBe(true)
  expect(leetcode459('aba')).toBe(false)
  expect(leetcode459('abcabcabcabc')).toBe(true)
})
