import '../../../weui/base.less'
import '../../../weui/widget/weui-grid/weui-grid.less'

import { defineComponent, h } from 'vue'

const Grid = defineComponent({
  name: 'Grid',

  setup(props, { attrs, slots }) {
    return () => h('div', { ...attrs, class: 'weui-grids' }, slots.default ? h(slots.default) : '')
  }
})

export default Grid
