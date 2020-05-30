import { defineComponent, h } from 'vue'

const GridItem = defineComponent({
  name: 'GridItem',

  setup(props, { attrs, slots }) {
    const getIcon = () =>
      h(
        'div',
        {
          class: 'weui-grid__icon'
        },
        slots.icon ? h(slots.icon) : ''
      )

    return () =>
      h(
        'div',
        {
          ...attrs,
          class: 'weui-grid'
        },
        [
          getIcon(),
          h('div', { class: 'weui-grid__label' }, slots.default ? h(slots.default, {}) : '')
        ]
      )
  }
})

export default GridItem
