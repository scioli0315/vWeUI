import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-badge.less'

import { defineComponent, h } from 'vue'

const Badge = defineComponent({
  name: 'Badge',

  props: {
    absolute: Boolean,
    dot: Boolean,
    text: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props, { attrs }) {
    const getClass = () => {
      let cla = 'weui-badge'
      cla += props.dot ? ' weui-badge_dot' : ''
      cla += props.absolute ? ' weui-badge_absolute' : ''

      return cla
    }

    return () =>
      h(
        'span',
        {
          ...attrs,
          class: getClass()
        },
        props.dot ? '' : props.text
      )
  }
})

export default Badge
