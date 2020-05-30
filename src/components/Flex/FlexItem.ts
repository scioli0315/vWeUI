import { defineComponent, h } from 'vue'

const FlexItem = defineComponent({
  name: 'FlexItem',

  setup(props, { attrs, slots }) {
    return () =>
      h('div', { ...attrs, class: 'weui-flex__item' }, slots.default ? h(slots.default) : '')
  }
})

export default FlexItem
