export default function isPalindrome(s: string): boolean {
  // 剔除非字母字符
  let len = s.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    const char = s.charAt(i);
    const abc = /[A-Za-z0-9]/;
    if (abc.test(char)) {
      str += char;
    }
  }
  str = str.toLocaleLowerCase();
  // 判断回文数
  len = str.length;
  if (len <= 1) {
    return true;
  }

  for (let i = 0; i < parseInt(`${str.length / 2}`, 10); i++) {
    const charStart = str.charAt(i);
    const charEnd = str.charAt(str.length - 1 - i);
    console.log('charStart', charStart);
    console.log('charEnd', charEnd);
    if (charStart !== charEnd) {
      return false;
    }
  }

  return true;
}
