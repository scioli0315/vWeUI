import { defineComponent, h } from 'vue'

import Badge from '../Badge'

const TabbarItem = defineComponent({
  name: 'TabbarItem',

  props: {
    badge: Boolean,
    on: Boolean,
    badgeText: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props, { attrs, slots }) {
    const getBadg = () => {
      if (!props.badge) return ''
      if (!props.badgeText) {
        return h(Badge, { absolute: true, dot: true })
      } else {
        return h(Badge, { absolute: true, text: props.badgeText })
      }
    }

    const getIcon = () =>
      h('div', { class: 'weui-tabbar__icon' }, [getBadg(), slots.icon ? h(slots.icon) : ''])

    const getLabel = () =>
      h('p', { class: 'weui-tabbar__label' }, slots.default ? h(slots.default) : '')

    return () =>
      h('div', { ...attrs, class: `weui-tabbar__item ${props.on ? 'weui-bar__item_on' : ''}` }, [
        getIcon(),
        getLabel()
      ])
  }
})

export default TabbarItem
