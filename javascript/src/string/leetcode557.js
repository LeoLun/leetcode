/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // const arr = s.split(' ')
  // const arr2 = []
  // arr.forEach((item) => {
  //   const itemR = []
  //   for (let i = 0; i < item.length; i++) {
  //     itemR.unshift(item[i])
  //   }
  //   arr2.push(itemR.join(''))
  // })
  // return arr2.join(' ')
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}

export default reverseWords
