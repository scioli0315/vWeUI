import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-cell_global.less'
import '../../../weui/widget/weui-cell/weui-form.less'

import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'
import { getBd, getCell } from '../../utils/cell'

const TextArea = defineComponent({
  name: 'TextArea',

  props: {
    disabled: Boolean,
    maxlength: {
      type: Number,
      default: 0
    },
    rows: {
      type: Number,
      default: 3
    },
    placeholder: {
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

  setup(props, { attrs }) {
    const onInput = (event: any) => {
      stopPropagation(event)

      const target = event.target || { value: '' }
      props['onUpdate:modelValue'](target.value)
    }

    const getCounter = () => {
      if (props.maxlength === 0) return ''
      return h('div', { class: 'weui-textarea-counter' }, [
        h('span', props.modelValue.length),
        `/${props.maxlength}`
      ])
    }

    return () => {
      const cla = `weui-cell_active`
      const bd = getBd([
        h('textarea', {
          ...attrs,
          disabled: props.disabled,
          maxlength: props.maxlength > 0 ? props.maxlength : '',
          class: 'weui-textarea',
          rows: props.rows,
          value: props.modelValue,
          placeholder: props.placeholder,
          onInput
        }),
        getCounter()
      ])
      return getCell([bd], null, cla)
    }
  }
})

export default TextArea
