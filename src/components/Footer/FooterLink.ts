import { defineComponent, h } from 'vue'

const FooterLink = defineComponent({
  name: 'FooterLink',

  setup(props, { attrs, slots }) {
    return () =>
      h(
        'span',
        {
          ...attrs,
          class: 'weui-footer__link'
        },
        slots.default ? h(slots.default) : ''
      )
  }
})

export default FooterLink
