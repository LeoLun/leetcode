/**
 * findContentChildren
 * @param g 胃口
 * @param s 饼干
 */
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      child++;
    }
    cookie++;
  }

  return child;
}

/**
//  * findContentChildren
//  * @param g 胃口
//  * @param s 饼干
//  */
// function findContentChildren(g: number[], s: number[]): number {
//   let result = 0;

//   // 排序
//   g.sort((a, b) => a - b);
//   s.sort((a, b) => a - b);

//   let j = 0;

//   // 遍历 g 寻找 s 是否存在大于等于 g[i] 的 s[j]; 如果存在则剔除，记录 +1
//   for (let i = 0; i < g.length; i++) {
//     for (; j < s.length; j++) {
//       if (g[i] <= s[j]) {
//         result++;
//         j++;
//         break;
//       }
//     }
//     if (j >= s.length) {
//       break;
//     }
//   }

//   return result;
// }
export default findContentChildren;
