import '../../../weui/base.less'
import '../../../weui/widget/weui-panel/weui-panel.less'
import '../../../weui/widget/weui-media-box/weui-media-box.less'

import { defineComponent, h } from 'vue'

const PanelGroup = defineComponent({
  name: 'PanelGroup',

  props: {
    title: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props, { attrs, slots }) {
    const getHd = () => {
      if (!props.title) return ''
      return h('div', { class: 'weui-panel__hd' }, props.title)
    }

    const getBd = () => h('div', { class: 'weui-panel__bd' }, slots.default ? h(slots.default) : '')

    const getFt = () => {
      if (!slots.ft) return ''
      return h('div', { class: 'weui-panel__ft' }, h(slots.ft))
    }

    return () => h('div', { ...attrs, class: `weui-panel` }, [getHd(), getBd(), getFt()])
  }
})

export default PanelGroup
