import compareVersion from './a.js'

test('compareVersion', () => {
  expect(compareVersion('1.01', '1.001')).toEqual(0)
  expect(compareVersion('1.0', '1.0.0')).toEqual(0)
  expect(compareVersion('0.1', '1.1')).toEqual(-1)
  expect(compareVersion('1.0.1', '1')).toEqual(1)
  expect(compareVersion('7.5.2.4', '7.5.3')).toEqual(-1)
})
