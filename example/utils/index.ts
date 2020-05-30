export const setStore = (key: string, content: any) => {
  if (!key) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(key, content)
}

export const getStore = (key: string) => {
  if (!key) return
  return window.localStorage.getItem(key)
}

export const removeStore = (key: string) => {
  if (!key) return
  window.localStorage.removeItem(key)
}
