function convertToTitle(columnNumber: number): string {
  const map = ['A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let result = '';
  let num = columnNumber;

  while (num > 26) {
    const item = num % 26;
    if (item === 0) {
      result = `Z${result}`;
    } else {
      result = map[item - 1] + result;
    }

    num = parseInt(`${num / 26}`, 10);
    if (item === 0) {
      num -= 1;
    }
  }

  result = map[num - 1] + result;

  return result;
}

export default convertToTitle;
