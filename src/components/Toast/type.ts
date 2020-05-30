export type ToastType = 'success' | 'fail' | 'text'

export type ToastMessage = string | number

export interface ToastOptions {
  duration?: number
  mask?: boolean
  message?: ToastMessage
  type: ToastType
}
