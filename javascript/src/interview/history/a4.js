// 如需使用参数输入，请直接去掉下面注释
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

/**
 * 格式化时间戳
 * @param { Number } time 时间戳
 * @return { String }
 */
function formt (time) {
  if (Number.isNaN(+time)) {
    return null
  }
  time = +time

  if (isToday(time)) {
    return formtToday(time)
  }

  if (isYestday(time)) {
    return '昨天'
  }

  if (isWeek(time)) {
    return formtWeek(time)
  }

  if (isBeforeWeek(time)) {
    return formtBeforeWeek(time)
  }

  return null
}

function isToday (time) {
  const timeDay = new Date(time)
  const today = new Date()

  const todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  const timeString = `${timeDay.getFullYear()}-${timeDay.getMonth()}-${timeDay.getDate()}`

  if (todayString === timeString) {
    return true
  }
  return false
}

function formtToday (time) {
  const timeDay = new Date(time)
  let hours = timeDay.getHours()
  if (hours < 10) {
    hours = '0' + hours
  }
  let minutes = timeDay.getMinutes()
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  return `${hours}：${minutes}`
}

function isYestday (time) {
  const timeDay = new Date(time)
  const yestday = new Date()
  yestday.setDate(yestday.getDate() - 1)
  const yestdayString = `${yestday.getFullYear()}-${yestday.getMonth()}-${yestday.getDate()}`
  const timeString = `${timeDay.getFullYear()}-${timeDay.getMonth()}-${timeDay.getDate()}`

  if (yestdayString === timeString) {
    return true
  }
  return false
}

function isWeek (time) {
  const timeDay = new Date(time)
  const sunday = new Date()
  sunday.setDate(sunday.getDate() - sunday.getDay())
  timeDay.setDate(timeDay.getDate() - timeDay.getDay())
  const sundayString = `${sunday.getFullYear()}-${sunday.getMonth()}-${sunday.getDate()}`
  const timeString = `${timeDay.getFullYear()}-${timeDay.getMonth()}-${timeDay.getDate()}`

  if (sundayString === timeString) {
    return true
  }
  return false
}

function formtWeek (time) {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  const timeDay = new Date(time)
  return week[timeDay.getDay()]
}

function isBeforeWeek (time) {
  const timeDay = new Date(time)
  const beforeSunday = new Date()
  beforeSunday.setDate(beforeSunday.getDate() - beforeSunday.getDay() - 7)
  timeDay.setDate(timeDay.getDate() - timeDay.getDay())
  const beforeSundayString = `${beforeSunday.getFullYear()}-${beforeSunday.getMonth()}-${beforeSunday.getDate()}`
  const timeString = `${timeDay.getFullYear()}-${timeDay.getMonth()}-${timeDay.getDate()}`
  if (beforeSundayString === timeString) {
    return true
  }
  return false
}

function formtBeforeWeek (time) {
  const timeDay = new Date(time)
  return `${timeDay.getFullYear()}/${timeDay.getMonth() + 1}/${timeDay.getDate()}`
}

const a = formt(Date.now())
console.log('今天: ', a)
const b = formt((new Date('2021/11/02')).getTime())
console.log('昨天: ', b)
const c = formt(new Date('2021/11/05').getTime())
console.log('本周: ', c)
const d = formt(new Date('2021/10/27').getTime())
console.log('上周: ', d)
const e = formt(new Date('2021/11/17').getTime())
console.log('其他: ', e)

const f = new Date('2021/11/01')
f.setDate(f.getDate() - 1)
console.log('f', formtBeforeWeek(f.getTime()))
