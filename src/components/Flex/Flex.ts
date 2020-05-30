import '../../../weui/base.less'
import '../../../weui/widget/weui-flex/weui-flex.less'

import { defineComponent, h } from 'vue'

const Flex = defineComponent({
  name: 'Flex',

  setup(props, { attrs, slots }) {
    return () => h('div', { ...attrs, class: 'weui-flex' }, slots.default ? h(slots.default) : '')
  }
})

export default Flex
