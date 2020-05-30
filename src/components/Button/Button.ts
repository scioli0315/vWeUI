import '../../../weui/base.less'
import '../../../weui/widget/weui-button/weui-button.less'

import { defineComponent, h } from 'vue'

import { button } from '../../utils/button'
import { ButtonProps } from './type'

const Button = defineComponent({
  name: 'Button',

  props: {
    cell: Boolean,
    disabled: Boolean,
    mini: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: 'default'
    }
  },

  setup(props, { attrs, slots, emit }) {
    const onClick = (event: Event) => {
      emit('onClick', event)
    }

    return () => button(props as ButtonProps, onClick, slots.default ? h(slots.default) : '', attrs)
  }
})

export default Button
