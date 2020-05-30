import { defineComponent, h } from 'vue'

const FooterLinks = defineComponent({
  name: 'FooterLinks',

  setup(props, { attrs, slots }) {
    return () =>
      h(
        'p',
        {
          ...attrs,
          class: 'weui-footer__links'
        },
        slots.default ? h(slots.default) : ''
      )
  }
})

export default FooterLinks
