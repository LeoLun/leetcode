import isPalindrome from './leetcode125';

test('isPalindrome', () => {
  expect(isPalindrome('0P')).toEqual(false);
  // expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  // expect(isPalindrome('race a car')).toEqual(false);
  // expect(isPalindrome(' ')).toEqual(true);
});
