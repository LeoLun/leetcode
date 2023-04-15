import titleToNumber from './leetcode171';

test('titleToNumber', () => {
  expect(titleToNumber('AZ')).toEqual(52);
  expect(titleToNumber('A')).toEqual(1);
  expect(titleToNumber('AB')).toEqual(28);
  expect(titleToNumber('FXSHRXW')).toEqual(2147483647);
  expect(titleToNumber('AZ')).toEqual(52);
  expect(titleToNumber('ZY')).toEqual(701);
});
