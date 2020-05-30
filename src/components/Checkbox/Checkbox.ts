import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-cell_global.less'
import '../../../weui/widget/weui-cell/weui-check.less'

import { defineComponent, h } from 'vue'

import { remove, stopPropagation } from '../../utils'
import { getBd, getCell, getHd } from '../../utils/cell'
import { CheckboxOptions } from './type'

const Checkbox = defineComponent({
  name: 'Checkbox',

  props: {
    options: {
      type: Array,
      required: true
    },
    disabled: Boolean,
    modelValue: {
      type: Array,
      required: true
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs }) {
    return () => {
      const value = props.modelValue as Array<string | number>
      const ops = props.options as CheckboxOptions

      return ops.map((item, index: number) => {
        const key = item.value || index
        const cla = `weui-cell_active weui-cell_checkbox weui-check__label ${
          item.disabled || props.disabled ? 'weui-cell_disabled' : ''
        }`
        const onClick = (event: Event) => {
          if (item.disabled || props.disabled) return
          stopPropagation(event)
          if (value.includes(key)) {
            remove(value, key)
          } else {
            value.push(key)
          }

          props['onUpdate:modelValue'](value)
        }

        const hd = getHd([
          h('input', {
            ...attrs,
            class: 'weui-check',
            type: 'checkbox',
            disabled: item.disabled,
            checked: value.includes(key)
          }),
          h('div', { class: 'weui-icon-checked' })
        ])
        const bd = getBd(item.label.toString())

        return getCell([hd, bd], onClick, cla, 'lable')
      })
    }
  }
})

export default Checkbox
