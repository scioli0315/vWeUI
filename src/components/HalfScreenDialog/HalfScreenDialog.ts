import { defineComponent } from 'vue'

import { HalfScreenProps, halfScreenProps } from './type'
import { halfScreenAnimate } from './util'

const HalfScreenDialog = defineComponent({
  name: 'HalfScreenDialog',

  props: halfScreenProps,

  setup(props, { emit, slots }) {
    const onHide = () => {
      props['onUpdate:visible'](false)
    }

    const onCancel = () => {
      emit('onCancel')
      onHide()
    }

    const onMore = () => {
      emit('onMore')
    }

    const handerClose = (event: Event) => {
      event.stopPropagation()
      onCancel()
    }

    return () => halfScreenAnimate(props as HalfScreenProps, slots, handerClose, onCancel, onMore)
  }
})

export default HalfScreenDialog
