import '../../../weui/base.less'
import '../../../weui/widget/weui-page/weui-article.less'

import { defineComponent, h } from 'vue'

const Article = defineComponent({
  name: 'Article',

  setup(props, { attrs, slots }) {
    return () =>
      h('article', { ...attrs, class: 'weui-article' }, slots.default ? h(slots.default) : '')
  }
})

export default Article
