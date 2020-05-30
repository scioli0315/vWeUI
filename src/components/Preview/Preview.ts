import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-form.less'

import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'

const Preview = defineComponent({
  name: 'Preview',

  props: {
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    }
  },

  setup(props, { attrs, emit, slots }) {
    const getHd = () => {
      if (!slots.hd) return ''
      return h('div', { class: 'weui-form-preview__hd' }, h(slots.hd))
    }

    const getBd = () => {
      if (!slots.default) return ''
      return h('div', { class: 'weui-form-preview__bd' }, h(slots.default))
    }

    const onClick = (event: Event, cla: string) => {
      stopPropagation(event)
      if (cla === 'default') {
        emit('onCancel')
      } else {
        emit('onConfirm')
      }
    }

    const getBtn = (txt: string, cla: string) => {
      return h(
        'a',
        {
          class: `weui-form-preview__btn weui-form-preview__btn_${cla}`,
          href: 'javascript:',
          onClick: (event: Event) => {
            onClick(event, cla)
          }
        },
        txt
      )
    }

    const getCancel = () => {
      if (!props.showCancel) return ''
      return getBtn(props.cancelText, 'default')
    }

    const getConfirm = () => {
      if (!props.showConfirm) return ''
      return getBtn(props.confirmText, 'primary')
    }

    const getFt = () => {
      if (!props.showCancel && !props.showConfirm) return ''
      return h('div', { class: 'weui-form-preview__ft' }, [getCancel(), getConfirm()])
    }

    return () => h('div', { ...attrs, class: 'weui-form-preview' }, [getHd(), getBd(), getFt()])
  }
})

export default Preview
