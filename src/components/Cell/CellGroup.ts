import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-form.less'

import { defineComponent, h } from 'vue'

const CellGroup = defineComponent({
  name: 'CellGroup',

  props: {
    title: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props, { attrs, slots }) {
    const getTitle = () => {
      if (!props.title) return ''
      return h('div', { class: 'weui-cells__title' }, props.title)
    }

    return () =>
      h('div', { ...attrs, class: 'weui-cells__item' }, [
        getTitle(),
        h('div', { class: `weui-cells` }, slots.default ? h(slots.default) : '')
      ])
  }
})

export default CellGroup
