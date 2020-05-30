import { defineComponent, h, ref } from 'vue'

import { fadeIn } from '../../utils/animate'
import Base from './Base'

const toastProps = {
  duration: {
    type: Number,
    default: 2000
  },
  mask: {
    type: Boolean,
    default: true
  },
  message: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
}

const Toast = defineComponent({
  name: 'Toast',

  props: toastProps,

  setup(props) {
    const visible = ref(true)

    return () => {
      let timer = -1

      clearTimeout(timer)
      timer = setTimeout(() => {
        visible.value = false
      }, props.duration)

      return fadeIn(
        h(Base, {
          mask: props.mask,
          message: props.message,
          type: props.type,
          visible: visible.value
        })
      )
    }
  }
})

export default Toast
