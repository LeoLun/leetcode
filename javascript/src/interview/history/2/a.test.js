import compareVersion from './a.js'

test('compareVersion', () => {
  expect(compareVersion('1.01', '1.001')).toEqual(0)
})
