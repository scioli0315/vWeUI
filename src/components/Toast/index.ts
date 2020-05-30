import { createApp } from 'vue'

import { isObject } from '../../utils'
import ToastComponent from './Toast'
import { ToastMessage, ToastOptions, ToastType } from './type'

const defaultOptions: ToastOptions = {
  duration: 2000,
  mask: true,
  message: '',
  type: 'text'
}

const parseOptions = (message: ToastMessage | ToastOptions, type: ToastType) => {
  if (isObject(message)) {
    return { ...defaultOptions, ...message, type } as ToastOptions
  }

  return { ...defaultOptions, message, type } as ToastOptions
}

const createInstance = (type: ToastType, message: ToastMessage | ToastOptions) => {
  const o = { ...parseOptions(message, type) }
  if (!['success', 'fail', 'text'].includes(o.type)) {
    o.type = 'text'
  }
  const duration = o.duration as number

  const el = document.createElement('div')
  document.body.appendChild(el)
  const app = createApp(ToastComponent, {
    duration,
    mask: o.mask,
    message: o.message,
    type: o.type
  })
  app.mount(el)

  setTimeout(() => {
    app.unmount(el)
    el.remove()
  }, duration + 300)
}

const createMethod = (type: ToastType) => (message: ToastMessage | ToastOptions) => {
  createInstance(type, message)
}

const Toast = (message: ToastMessage | ToastOptions) => {
  if (isObject(message)) {
    createInstance(message.type, message)
  } else {
    createInstance(defaultOptions.type, message)
  }
}

Toast.success = createMethod('success')
Toast.fail = createMethod('fail')
Toast.text = createMethod('text')

export default Toast
