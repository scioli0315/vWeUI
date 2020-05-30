import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-cell_global.less'
import '../../../weui/widget/weui-cell/weui-access.less'

import { defineComponent, h } from 'vue'

import { getBd, getCell, getFt, getHd } from '../../utils/cell'

const Cell = defineComponent({
  name: 'Cell',

  props: {
    access: Boolean,
    link: Boolean
  },

  setup(props, { slots }) {
    return () => {
      const cla = `weui-cell_active ${props.access ? 'weui-cell_access' : ''} ${
        props.link ? 'weui-cell_link' : ''
      }`
      const hd = slots.hd ? getHd(h(slots.hd)) : ''
      const bd = getBd(slots.default ? h(slots.default) : '')
      const ft = getFt(slots.ft ? h(slots.ft) : '')

      return getCell([hd, bd, ft], null, cla)
    }
  }
})

export default Cell
