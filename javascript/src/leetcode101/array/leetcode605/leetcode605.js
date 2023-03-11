/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let i = 0
  flowerbed.forEach((item, index) => {
    if (!item && !flowerbed[index - 1] && !flowerbed[index + 1]) {
      i++
      flowerbed[index] = 1
    }
  })
  if (i >= n) {
    return true
  }
  return false
}

export default canPlaceFlowers
