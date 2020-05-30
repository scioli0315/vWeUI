import { defineComponent, h, inject, ref } from 'vue'

import { NavBarChane } from './NavBar'

const NavBarItem = defineComponent({
  name: 'NavBarItem',

  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },

  setup(props, { attrs }) {
    const on = inject('_NavBarItemOn', ref(''))

    const onClick = inject('_NavBarItemOnChange') as NavBarChane

    return () =>
      h(
        'div',
        {
          ...attrs,
          class: `weui-navbar__item ${on.value === props.name ? 'weui-bar__item_on' : ''}`,
          onClick: () => {
            if (on.value === props.name) return
            on.value = props.name
            onClick(props.name)
          }
        },
        props.title
      )
  }
})

export default NavBarItem
