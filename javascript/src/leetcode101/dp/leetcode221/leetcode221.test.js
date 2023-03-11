import maximalSquare from './leetcode221'

test('maximalSquare', () => {
  expect(
    maximalSquare([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0']
    ])
  ).toEqual(4)
})
