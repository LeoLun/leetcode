import offer04 from './offer04'

test('findNumberIn2DArray', () => {
  // expect(offer04([
  //   [1,   4,  7, 11, 15],
  //   [2,   5,  8, 12, 19],
  //   [3,   6,  9, 16, 22],
  //   [10, 13, 14, 17, 24],
  //   [18, 21, 23, 26, 30]
  // ], 5)).toBe(true)
  // expect(offer04([
  //   [1,   4,  7, 11, 15],
  //   [2,   5,  8, 12, 19],
  //   [3,   6,  9, 16, 22],
  //   [10, 13, 14, 17, 24],
  //   [18, 21, 23, 26, 30]
  // ], 20)).toBe(false)
  // expect(offer04([
  //   [1,   4,  7, 11, 15],
  //   [2,   5,  8, 12, 19],
  //   [3,   6,  9, 16, 22],
  //   [10, 13, 14, 17, 24],
  //   [18, 21, 23, 26, 30]
  // ], 7)).toBe(true)
  // expect(offer04([], 0)).toBe(false)
  // expect(offer04([[1,3,5]], 5)).toBe(true)
  expect(offer04([[1], [3], [5]], 3)).toBe(true)
  // expect(offer04([
  //   [1,2,3,4,5],
  //   [6,7,8,9,10],
  //   [11,12,13,14,15],
  //   [16,17,18,19,20],
  //   [21,22,23,24,25]], 15)).toBe(true)
})
