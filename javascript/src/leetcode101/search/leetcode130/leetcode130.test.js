import solve from './leetcode130'

test('solve', () => {
  expect(solve(
    [['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']]
  )).toEqual(
    [['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']])

  expect(solve(
    [['O', 'O'],
      ['O', 'O']]
  )).toEqual(
    [['O', 'O'],
      ['O', 'O']])
})
