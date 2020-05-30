import { defineComponent, h } from 'vue'

const Mask = defineComponent({
  props: {
    visible: Boolean,
    onClose: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    return () => {
      if (!props.visible) return

      return h('div', {
        class: 'weui-mask',
        onClick: props.onClose
      })
    }
  }
})

export default Mask
