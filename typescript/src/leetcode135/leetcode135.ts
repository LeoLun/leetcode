function candy(ratings: number[]): number {
  // 初始化为 1
  const arr = new Array(ratings.length).fill(1);
  let result = 0;
  // 从左到右遍历一遍
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  // 从右到左遍历一遍
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && arr[i] <= arr[i + 1]) {
      arr[i] = arr[i + 1] + 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

export default candy;
