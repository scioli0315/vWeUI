import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-gallery.less'

import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'

const Gallery = defineComponent({
  name: 'Gallery',

  props: {
    showDelete: Boolean,
    src: {
      type: String,
      default: ''
    },
    visible: Boolean,
    ['onUpdate:visible']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs, emit }) {
    const onClose = (event: Event) => {
      stopPropagation(event)
      if (props['onUpdate:visible']) props['onUpdate:visible'](false)
    }

    const onDelete = (event: Event) => {
      stopPropagation(event)
      emit('onDelete', event)
    }

    const getDelete = () => {
      if (!props.showDelete) return ''
      return h(
        'div',
        {
          class: 'weui-gallery__opr'
        },
        h(
          'a',
          {
            href: 'javascript:',
            class: 'weui-gallery__del',
            onClick: onDelete
          },
          h('i', {
            class: 'weui-icon-delete weui-icon_gallery-delete'
          })
        )
      )
    }

    return () => {
      if (!props.visible) return
      return h(
        'div',
        {
          ...attrs,
          class: 'weui-gallery',
          onClick: onClose
        },
        [
          h('span', {
            class: 'weui-gallery__img',
            style: `background-image: url(${props.src})`
          }),
          getDelete()
        ]
      )
    }
  }
})

export default Gallery
