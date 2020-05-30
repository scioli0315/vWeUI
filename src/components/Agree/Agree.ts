import '../../../weui/base.less'
import '../../../weui/widget/weui-agree/weui-agree.less'

import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'

const Agree = defineComponent({
  name: 'Agree',

  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs, slots }) {
    const onChange = (event: any) => {
      stopPropagation(event)

      const target = event.target || { checked: false }
      props['onUpdate:modelValue'](target.checked)
    }

    return () =>
      h('label', { ...attrs, class: 'weui-agree' }, [
        h('input', {
          class: 'weui-agree__checkbox',
          type: 'checkbox',
          checked: props.modelValue,
          onChange
        }),
        h('span', { class: 'weui-agree__text' }, slots.default ? h(slots.default) : '')
      ])
  }
})

export default Agree
