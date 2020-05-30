import '../../../weui/base.less'
import '../../../weui/widget/weui-page/weui-msg.less'

import { defineComponent, h } from 'vue'

import Icon from '../Icon'

const Msg = defineComponent({
  name: 'Msg',

  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  setup(props, { attrs, slots }) {
    return () => {
      const getIcon = () => {
        if (!props.type) return ''
        return h('div', { class: 'weui-msg__icon-area' }, h(Icon, { type: props.type }))
      }

      const getDesc = () => {
        if (!slots.default) return ''
        return h('div', { class: 'weui-msg__desc' }, h(slots.default))
      }

      const getPrimary = () => {
        if (!slots.primary) return ''
        return h('div', { class: 'weui-msg__desc-primary' }, h(slots.primary))
      }

      const getTextArea = () =>
        h('div', { class: 'weui-msg__text-area' }, [
          h('h2', { class: 'weui-msg__title' }, props.title),
          getDesc(),
          getPrimary()
        ])

      const getOprArea = () => {
        if (!slots.opr) return ''
        return h(
          'div',
          { class: 'weui-msg__opr-area' },
          h('div', { class: 'weui-btn-area' }, h(slots.opr))
        )
      }

      const getTipsArea = () => {
        if (!slots.tips) return ''
        return h(
          'div',
          { class: 'weui-msg__tips-area' },
          h('div', { class: 'weui-msg__tips' }, h(slots.tips))
        )
      }

      const getExtraArea = () => {
        if (!slots.extra) return ''
        return h('div', { class: 'weui-msg__extra-area' }, h(slots.extra))
      }

      return h(
        'div',
        {
          ...attrs,
          class: 'weui-msg'
        },
        [getIcon(), getTextArea(), getOprArea(), getTipsArea(), getExtraArea()]
      )
    }
  }
})

export default Msg
