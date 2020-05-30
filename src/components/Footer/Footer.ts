import '../../../weui/base.less'
import '../../../weui/widget/weui-footer/weui-footer.less'

import { defineComponent, h } from 'vue'

import FooterLinks from './FooterLinks'

const Footer = defineComponent({
  name: 'Footer',

  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        {
          ...attrs,
          class: 'weui-footer'
        },
        [
          h(FooterLinks, slots.links),
          h(
            'p',
            {
              class: 'weui-footer__text'
            },
            slots.default ? h(slots.default) : ''
          )
        ]
      )
  }
})

export default Footer
