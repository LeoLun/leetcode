import check from './a.js'

test('check', () => {
  expect(check('()')).toEqual(true)
  expect(check('{((()())())[()]}()')).toEqual(true)
  expect(check('())')).toEqual(false)
  expect(check('([])')).toEqual(false)
  expect(check('())(()')).toEqual(false)
  expect(check('{((()())())[()]}()')).toEqual(true)
})
