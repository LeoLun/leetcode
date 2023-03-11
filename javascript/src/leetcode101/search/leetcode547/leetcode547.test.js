import findCircleNum from './leetcode547'

test('findCircleNum', () => {
  expect(findCircleNum(
    [ [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1]]
  )).toEqual(2)

  expect(findCircleNum(
    [ [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1]]
  )).toEqual(1)

  expect(findCircleNum([])).toEqual(0)
})
