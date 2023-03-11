import compare from './a.js'

//   5. 例子，1.2.3 < 1.2.4 < 1.3.0.alpha.1 < 1.3.0.alpha.2 < 1.3.0.beta.1 < 1.3.0.rc.1 < 1.3.0

test('compare', () => {
  expect(compare('1.2.3', '1.2.4')).toEqual(-1)
  expect(compare('1.2.4', '1.3.0.alpha.1')).toEqual(-1)
  expect(compare('1.3.0.alpha.2', '1.3.0.alpha.1')).toEqual(1)
  expect(compare('1.3.0.rc.1', '1.3.0.beta.1')).toEqual(1)
  expect(compare('1.3.0', '1.3.0.rc.1')).toEqual(1)
})
