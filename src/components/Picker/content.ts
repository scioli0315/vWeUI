import { h, Ref } from 'vue'

import { PickerOptions } from './type'

const content = (options: PickerOptions) => {
  return options.map((o) =>
    h(
      'div',
      { class: `weui-picker__item ${o.disabled ? 'weui-picker__item_disabled' : ''}` },
      o.label
    )
  )
}

export const group = (options: PickerOptions, diff: Ref, time: Ref) => {
  return [
    h('div', { class: 'weui-picker__mask' }),
    h('div', { class: 'weui-picker__indicator' }),
    h(
      'div',
      {
        class: 'weui-picker__content',
        style: {
          transform: `translate3d(0, ${diff.value}px, 0)`,
          transition: `all ${time.value}s`
        }
      },
      content(options as PickerOptions)
    )
  ]
}
