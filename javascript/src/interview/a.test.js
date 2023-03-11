import test from '../../a.js'
// 入参： [1,2,5,-7,8,-10,13, 1];
// 输出： 14

test('compare', () => {
  expect(test([1, 2, 5, -7, 8, -10, 13, 1])).toEqual(14)
})
