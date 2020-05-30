import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-half-screen-dialog.less'
import '../../../weui/widget/weui-tips/weui-mask.less'

import { defineComponent, h } from 'vue'

import { halfScreenProps } from './type'

export const HalfScreen = defineComponent({
  props: {
    ...halfScreenProps,
    onCancel: {
      type: Function,
      required: true
    },
    onMore: {
      type: Function,
      required: true
    },
    class: {
      type: String,
      default: ''
    }
  },

  setup(props, { slots }) {
    const handerClose = (event: Event) => {
      event.stopPropagation()
      props.onCancel()
    }

    const handerMore = (event: Event) => {
      event.stopPropagation()
      props.onMore()
    }

    const getClose = () => {
      if (!props.showClose) return ''
      return h(
        'div',
        { class: 'weui-half-screen-dialog__hd__side' },
        h(
          'button',
          { class: 'weui-icon-btn', onClick: handerClose },
          h('i', { class: 'weui-icon-close-thin' })
        )
      )
    }

    const getSubtitle = () => {
      if (!props.subtitle) return ''
      return h('span', { class: 'weui-half-screen-dialog__subtitle' }, props.subtitle)
    }

    const getMore = () => {
      if (!props.showMore) return ''
      return h(
        'div',
        { class: 'weui-half-screen-dialog__hd__side' },
        h(
          'button',
          { class: 'weui-icon-btn', onClick: handerMore },
          h('i', { class: 'weui-icon-more' })
        )
      )
    }

    const getHd = () =>
      h('div', { class: 'weui-half-screen-dialog__hd' }, [
        getClose(),
        h('div', { class: 'weui-half-screen-dialog__hd__main' }, [
          h('strong', { class: 'weui-half-screen-dialog__title' }, props.title),
          getSubtitle()
        ]),
        getMore()
      ])

    const getBd = () =>
      h('div', { class: 'weui-half-screen-dialog__bd' }, slots.default ? h(slots.default) : '')

    const getFt = () =>
      h('div', { class: 'weui-half-screen-dialog__ft' }, slots.ft ? h(slots.ft) : '')

    return () => {
      if (!props.visible) return

      return h('div', { class: `weui-half-screen-dialog ${props.class}` }, [
        getHd(),
        getBd(),
        getFt()
      ])
    }
  }
})
