import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-toast.less'
import '../../../weui/widget/weui-tips/weui-mask.less'

import { defineComponent, h } from 'vue'

import { ToastType } from './type'

type _ToastType = ToastType | 'loading'

export const baseProps = {
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
  },
  visible: {
    type: Boolean,
    default: false
  }
}

const Base = defineComponent({
  props: baseProps,

  setup(props) {
    const getClass = () => {
      const cla = 'weui-icon_toast'
      const type = props.type as _ToastType

      // ['success', 'fail', 'text', 'loading]
      const typeCla = {
        success: 'weui-icon-success-no-circle',
        fail: 'weui-icon-warn-no-circle',
        text: '',
        loading: 'weui-loading'
      }
      return `${cla} ${typeCla[type]}`
    }

    const getMask = () => {
      if (!props.mask) return ''
      return h('div', {
        class: 'weui-mask_transparent'
      })
    }

    const getText = () => {
      if (!props.message) return ''
      return h(
        'p',
        {
          class: 'weui-toast__content'
        },
        props.message
      )
    }

    return () => {
      if (!props.visible) return

      return h('div', [
        getMask(),
        h(
          'div',
          {
            class: `weui-toast ${props.type === 'text' ? 'weui-toast_text' : ''}`
          },
          [
            h('i', {
              class: getClass()
            }),
            getText()
          ]
        )
      ])
    }
  }
})

export default Base
