import convertToTitle from './leetcode168';

test('convertToTitle', () => {
  expect(convertToTitle(1)).toEqual('A');
  expect(convertToTitle(28)).toEqual('AB');
  expect(convertToTitle(2147483647)).toEqual('FXSHRXW');
  expect(convertToTitle(52)).toEqual('AZ');
  expect(convertToTitle(701)).toEqual('ZY');
});
