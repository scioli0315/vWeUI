export const isArray = Array.isArray

export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const stopPropagation = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
}

export const remove = <T>(arr: T[], el: T) => {
  const i = arr.indexOf(el)
  if (i > -1) {
    arr.splice(i, 1)
  }
}

export const getPropsWidth = (num: string | number | undefined | null) => {
  if (!num) return ''

  let w = ''
  if (isNaN(+num)) {
    w = num.toString()
  } else {
    w = `${num}px`
  }
  return w
}
