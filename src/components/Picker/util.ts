import { PickerOption } from './type'

export const addPreZero = (num: number) => {
  return num < 10 ? `0${num}` : `${num}`
}

export const getYears = (start: number, end: number, unit = '') => {
  const years = []
  for (let i = start; i <= end; i++) {
    years.push({
      label: `${i} ${unit}`,
      value: `${i}`
    })
  }
  return years
}

export const getMonths = (unit = '') => {
  const months = []
  for (let i = 1; i <= 12; i++) {
    const month = addPreZero(i)
    months.push({
      label: `${month} ${unit}`,
      value: month
    })
  }
  return months
}

export const getMonthLength = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}

export const getDays = (year: number, month: number, unit = '') => {
  const days = []
  const len = getMonthLength(year, month)
  for (let i = 1; i <= len; i++) {
    const day = addPreZero(i)
    days.push({
      label: `${day} ${unit}`,
      value: day
    })
  }
  return days
}

export const getDefaultDate = (isDate: boolean, yearUnit = '', monthUnit = '') => {
  const date = new Date()
  let year = '2000'
  let month = '01'
  let years: Array<PickerOption> = []
  let months: Array<PickerOption> = []
  let today = '01'
  if (isDate) {
    year = `${date.getFullYear()}`
    month = addPreZero(date.getMonth() + 1)
    today = addPreZero(date.getDate())
    years = getYears(+year - 20, +year + 20, yearUnit)
    months = getMonths(monthUnit)
  }
  return { year, month, years, months, today }
}

export const setDateDefaultValue = (
  defaultValue: Array<string | number>,
  column: number,
  isDate: boolean
) => {
  if (isDate) {
    const val = []
    for (let i = 0; i < column; i++) {
      val[i] = addPreZero(+defaultValue[i])
    }
    return val
  }
  return defaultValue
}
