import { defineComponent, h } from 'vue'

const PanelMeta = defineComponent({
  name: 'PanelMeta',

  props: {
    extra: Boolean,
    text: {
      type: String,
      default: ''
    }
  },

  setup(props, { attrs }) {
    if (!props.text) return ''
    return () =>
      h(
        'li',
        {
          ...attrs,
          class: `weui-media-box__info__meta ${
            props.extra ? 'weui-media-box__info__meta_extra' : ''
          }`
        },
        props.text
      )
  }
})

export default PanelMeta
