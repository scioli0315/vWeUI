import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-loadmore.less'

import { defineComponent, h } from 'vue'

const LoadMore = defineComponent({
  name: 'LoadMore',

  props: {
    message: {
      type: String,
      default: '加载中...'
    }
  },

  setup(props, { attrs }) {
    return () =>
      h('div', { ...attrs, class: 'weui-loadmore' }, [
        h('i', { class: 'weui-loading' }),
        h('span', { class: 'weui-loadmore__tips' }, props.message)
      ])
  }
})

export default LoadMore
