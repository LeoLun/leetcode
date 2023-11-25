function titleToNumber(columnTitle: string): number {
  const map = ['A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const str = columnTitle.charAt(columnTitle.length - 1 - i);
    let index = map.findIndex((item) => item === str) + 1;

    if (i > 0) {
      index *= 26 ** i;
    }

    result += index;
  }

  return result;
}

export default titleToNumber;
