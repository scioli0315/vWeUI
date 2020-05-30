import '../../../weui/base.less'
import '../../../weui/widget/weui-tab/weui-tab.less'

import { defineComponent, h } from 'vue'

const Tabbar = defineComponent({
  name: 'Tabbar',

  setup(props, { attrs, slots }) {
    return () => h('div', { ...attrs, class: 'weui-tabbar' }, slots.default ? h(slots.default) : '')
  }
})

export default Tabbar
