import exist from './leetcode79'

test('exist', () => {
  expect(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ], 'ABCB')).toEqual(false)
})
