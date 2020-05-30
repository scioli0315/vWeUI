import '../../../weui/base.less'
import '../../../weui/widget/weui-progress/weui-progress.less'

import { defineComponent, h } from 'vue'

const Progress = defineComponent({
  name: 'Progress',

  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  setup(props, { attrs, slots }) {
    const getWidth = () => {
      const w = props.value < 0 ? 0 : props.value > 100 ? 100 : props.value
      return `${w}%`
    }

    const getOpr = () => {
      if (!slots.default) return ''
      return h('span', { class: 'weui-progress__opr' }, h(slots.default))
    }

    return () =>
      h('div', { ...attrs, class: 'weui-progress' }, [
        h(
          'div',
          { class: 'weui-progress__bar' },
          h('div', {
            class: 'weui-progress__inner-bar',
            style: {
              width: getWidth()
            }
          })
        ),
        getOpr()
      ])
  }
})

export default Progress
