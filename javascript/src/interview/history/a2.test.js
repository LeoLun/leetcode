import decodeStr from './a.js'

test('decodeStr', () => {
  expect(decodeStr('2[a]1[bc]')).toEqual('aabc')
  expect(decodeStr('3[abc]2[cd]ff')).toEqual('abcabcabccdcdff')
  expect(decodeStr('2[e2[d]]')).toEqual('eddedd')
})
