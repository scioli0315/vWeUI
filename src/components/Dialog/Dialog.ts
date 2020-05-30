import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-dialog.less'

import { defineComponent, h } from 'vue'

import { fadeIn } from '../../utils/animate'

const dialogProps = {
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
  },
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'ios'
  },
  visible: {
    type: Boolean,
    default: false
  }
}

const Dialog = defineComponent({
  props: dialogProps,

  setup(props, { attrs, emit, slots }) {
    const getTitle = () => {
      if (!props.title) return ''
      return h(
        'div',
        { class: 'weui-dialog__hd' },
        h('strong', { class: 'weui-dialog__title' }, props.title)
      )
    }

    const onCancel = (event: Event) => {
      emit('onCancel', event)
    }

    const getCancel = () => {
      if (!props.showCancel) return ''
      return h(
        'a',
        {
          href: 'javascript:',
          onClick: onCancel,
          class: `weui-dialog__btn weui-dialog__btn_default`
        },
        props.cancelText
      )
    }

    const onConfirm = (event: Event) => {
      emit('onConfirm', event)
    }

    const getConfirm = () => {
      if (!props.showConfirm) return ''
      return h(
        'a',
        {
          href: 'javascript:',
          onClick: onConfirm,
          class: `weui-dialog__btn weui-dialog__btn_primary`
        },
        props.confirmText
      )
    }

    return () => {
      if (!props.visible) return
      return h('div', [
        h('div', {
          class: 'weui-mask'
        }),
        h(
          'div',
          {
            ...attrs,
            class: `weui-dialog ${props.type === 'android' ? 'weui-skin_android' : ''}`
          },
          [
            getTitle(),
            h('div', { class: 'weui-dialog__bd' }, slots.default ? h(slots.default) : ''),
            h('div', { class: 'weui-dialog__ft' }, [getCancel(), getConfirm()])
          ]
        )
      ])
    }
  }
})

const DialogAnimate = defineComponent({
  name: 'Dialog',

  props: dialogProps,

  setup(props, { slots }) {
    return () => fadeIn(h(Dialog, { ...props }, { ...slots }))
  }
})

export default DialogAnimate
