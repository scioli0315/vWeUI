import '../../../weui/widget/weui-loading/weui-loading.less'

import { defineComponent, h, ref } from 'vue'

import { fadeIn } from '../../utils/animate'
import Base from './Base'

const loadingProps = {
  mask: {
    type: Boolean,
    default: true
  },
  message: {
    type: [String, Number],
    default: ''
  },
  visible: {
    type: Boolean,
    default: false
  }
}

const Loading = defineComponent({
  name: 'Loading',

  props: loadingProps,

  setup(props) {
    const show = ref(false)

    return () => {
      show.value = props.visible as boolean

      return fadeIn(
        h(Base, {
          mask: props.mask,
          message: props.message,
          type: 'loading',
          visible: show.value
        })
      )
    }
  }
})

export default Loading
