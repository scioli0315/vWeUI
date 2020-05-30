import { defineComponent, h } from 'vue'

const PreviewItem = defineComponent({
  name: 'PreviewItem',

  props: {
    label: {
      type: String,
      default: ''
    }
  },

  setup(props, { attrs, slots }) {
    const getValue = () => {
      if (!slots.default) return ''
      return h('span', { class: 'weui-form-preview__value' }, h(slots.default))
    }

    return () =>
      h('div', { ...attrs, class: 'weui-form-preview__item' }, [
        h('label', { class: 'weui-form-preview__label' }, props.label),
        getValue()
      ])
  }
})

export default PreviewItem
