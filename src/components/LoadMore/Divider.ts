import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-loadmore.less'

import { defineComponent, h } from 'vue'

const Divider = defineComponent({
  name: 'Divider',

  props: {
    message: {
      type: String,
      default: ''
    }
  },

  setup(props, { attrs }) {
    return () =>
      h(
        'div',
        {
          ...attrs,
          class: `weui-loadmore weui-loadmore_line ${props.message ? '' : 'weui-loadmore_dot'}`
        },
        h('span', { class: 'weui-loadmore__tips' }, props.message)
      )
  }
})

export default Divider
