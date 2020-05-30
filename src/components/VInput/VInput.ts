import '../../../weui/widget/weui-cell/weui-form.less'

import { defineComponent, h } from 'vue'

import { getPropsWidth, stopPropagation } from '../../utils'
import { getBd, getCell, getFt, getHd } from '../../utils/cell'

const VInput = defineComponent({
  name: 'VInput',

  props: {
    autofocus: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vcode: Boolean,
    maxlength: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    showClear: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs, slots }) {
    const setValue = (val: string) => {
      if (props['onUpdate:modelValue']) props['onUpdate:modelValue'](val)
    }

    const onInput = (event: any) => {
      stopPropagation(event)

      const target = event.target || { value: '' }
      setValue(target.value)
      // emit('onChange', target.value)
    }

    const onClear = (event: Event) => {
      stopPropagation(event)
      setValue('')
    }

    const getClear = () => {
      if (!props.showClear) return ''
      return h(
        'button',
        {
          class: 'weui-btn_reset weui-btn_icon weui-btn_input-clear',
          style: { display: props.modelValue.length > 0 ? 'inline' : 'none' },
          onClick: onClear
        },
        h('i', { class: 'weui-icon-clear' })
      )
    }

    return () => {
      const cla = `weui-cell_active ${props.vcode ? 'weui-cell_vcode' : ''} ${
        props.disabled ? 'weui-cell_disabled' : ''
      } ${props.readonly ? 'weui-cell_readonly' : ''}`
      const hd = getHd(
        h(
          'label',
          { class: 'weui-label', style: { width: getPropsWidth(props.labelWidth) } },
          slots.hd ? h(slots.hd) : props.label
        )
      )
      const bd = getBd(
        [
          h('input', {
            ...attrs,
            class: 'weui-input',
            type: props.type,
            autofocus: props.autofocus,
            disabled: props.disabled,
            maxlength: props.maxlength,
            placeholder: props.placeholder,
            readonly: props.readonly,
            value: props.modelValue || props.value,
            onInput
          }),
          getClear()
        ],
        'weui-flex'
      )

      const ft = getFt(slots.ft ? h(slots.ft) : '')

      return getCell([hd, bd, ft], null, cla)
    }
  }
})

export default VInput
