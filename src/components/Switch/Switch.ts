import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-cell_global.less'
import '../../../weui/widget/weui-cell/weui-switch.less'

import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'
import { getBd, getCell, getFt } from '../../utils/cell'

const Switch = defineComponent({
  name: 'Switch',

  props: {
    disabled: Boolean,
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs, emit }) {
    const onChange = (event: any) => {
      stopPropagation(event)

      const target = event.target || { checked: false }
      props['onUpdate:modelValue'](target.checked)
      emit('onChange', target.checked)
    }

    return () => {
      const cla = `weui-cell_switch`
      const bd = getBd(props.label)
      const ft = getFt(
        h('label', { class: 'weui-switch-cp' }, [
          h('input', {
            ...attrs,
            class: 'weui-switch-cp__input',
            type: 'checkbox',
            disabled: props.disabled,
            checked: props.modelValue,
            onChange
          }),
          h('div', { class: 'weui-switch-cp__box' })
        ])
      )
      return getCell([bd, ft], null, cla)
    }
  }
})

export default Switch
