// 题目描述
// 描述信息 输出一个 int 型数组的最大连续子数组（所有元素加和最大）各个元素之和 保证数组中至少有一个正数
// 入参： [1,2,5,-7,8,-10,13, 1];
// 输出： 14

// /**
//  * @param {[]} nums 数组
//  */
const test = function (nums) {
  let result = 0
  let current = 0
  const maxLength = nums.length
  for (let i = 0; i < maxLength; i++) {
    const num = nums[i]

    if (num > 0) {
      current += num

      if (i === maxLength - 1) {
        if (current > result) {
          result = current
        }
      }
    } else {
      if (current > result) {
        result = current
      }
      current = 0
    }
  }

  return result
}

const result = test([1, 2, 5, -7, 8, -10, 13, 1])
console.log(result === 14)

// fetch 抓取网站title
// 3个站
// 1、抓到一个就输出
// 2、抓到2个就输出
// 3、3个全抓到输出

const fetch = (title, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(title)
    }, time)
  })
}

const getItems = (fetchs, itemNumber) => {
  return new Promise((resolve) => {
    let num = 0
    const result = []
    fetchs.forEach((item) => {
      item.then((title) => {
        if (num < itemNumber) {
          result.push(title)
          num++
          if (num >= itemNumber) {
            resolve(result)
          }
        }
      })
    })
  })
}

const getAll = (fetchs) => {
  return getItems(fetchs, fetchs.length)
}

const fetchJD = fetch('JD', 1000)
const fetchBaidu = fetch('Baidu', 4000)
const fetchTaobao = fetch('Taobao', 3000)

getItems([fetchJD, fetchBaidu, fetchTaobao], 1).then((result) => {
  console.log(result)
})
getItems([fetchJD, fetchBaidu, fetchTaobao], 2).then((result) => {
  console.log(result)
})
getAll([fetchJD, fetchBaidu, fetchTaobao]).then((result) => {
  console.log(result)
})
