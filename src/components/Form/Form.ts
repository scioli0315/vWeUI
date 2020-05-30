import '../../../weui/base.less'
import '../../../weui/widget/weui-page/weui-form.less'

import { defineComponent, h, Slot } from 'vue'

const Form = defineComponent({
  name: 'Form',

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  setup(props, { attrs, slots }) {
    const getTitle = () => {
      if (!props.title) return ''
      return h('h2', { class: 'weui-form__title' }, props.title)
    }

    const getDesc = () => {
      if (!slots.desc) return ''
      return h('div', { class: 'weui-form__desc' }, h(slots.desc))
    }

    const getText = () => {
      return h('div', { class: 'weui-form__text-area' }, [getTitle(), getDesc()])
    }

    const getControl = () =>
      h(
        'div',
        { class: 'weui-form__control-area' },
        h(
          'div',
          { class: 'weui-cells__group weui-cells__group_form' },
          slots.default ? h(slots.default) : ''
        )
      )

    const getTips = (type: 'oprTips' | 'extraTips') => {
      if (!slots[type]) return ''
      const slot = slots[type] as Slot

      return h(
        'div',
        { class: 'weui-form__tips-area' },
        h('div', { class: 'weui-form__tips' }, h(slot))
      )
    }

    const getOpr = () => {
      if (!slots.opr) return ''
      return h('div', { class: 'weui-form__opr-area' }, h(slots.opr))
    }

    const getExtra = () => {
      if (!slots.extra) return ''
      return h('div', { class: 'weui-form__extra-area' }, h(slots.extra))
    }

    return () =>
      h('div', { ...attrs, class: 'weui-form' }, [
        getText(),
        getControl(),
        getTips('oprTips'),
        getOpr(),
        getTips('extraTips'),
        getExtra()
      ])
  }
})

export default Form
