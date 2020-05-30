import '../../../weui/widget/weui-cell/weui-check.less'

import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'
import { getBd, getCell, getFt } from '../../utils/cell'
import { RadioOptions } from './type'

const Radio = defineComponent({
  name: 'Radio',

  props: {
    options: {
      type: Array,
      required: true
    },
    disabled: Boolean,
    modelValue: {
      type: [String, Number],
      default: ''
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs }) {
    return () => {
      const ops = props.options as RadioOptions

      return ops.map((item, index: number) => {
        const value = item.value || index
        const cla = `weui-cell_active weui-cell_radio weui-check__label ${
          item.disabled || props.disabled ? 'weui-cell_disabled' : ''
        }`
        const onClick = (event: Event) => {
          if (item.disabled || props.disabled) return
          stopPropagation(event)
          props['onUpdate:modelValue'](value)
        }
        const bd = getBd(item.label.toString())
        const ft = getFt([
          h('input', {
            ...attrs,
            class: 'weui-check',
            type: 'radio',
            disabled: item.disabled,
            checked: value === props.modelValue
          }),
          h('div', { class: 'weui-icon-checked' })
        ])

        return getCell([bd, ft], onClick, cla, 'lable')
      })
    }
  }
})

export default Radio
