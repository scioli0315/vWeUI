import '../../../weui/base.less'
import '../../../weui/widget/weui-tab/weui-tab.less'

import { defineComponent, h, provide, ref } from 'vue'

export type NavBarChane = (value: string) => void

const NavBar = defineComponent({
  name: 'NavBar',

  props: {
    modelValue: {
      type: String,
      default: ''
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs, emit, slots }) {
    const onChange: NavBarChane = (value: string) => {
      if (props['onUpdate:modelValue']) props['onUpdate:modelValue'](value)
      emit('onChange', value)
    }

    provide('_NavBarItemOn', ref(props.modelValue))
    provide('_NavBarItemOnChange', onChange)

    return () => h('div', { ...attrs, class: 'weui-navbar' }, slots.default ? h(slots.default) : '')
  }
})

export default NavBar
