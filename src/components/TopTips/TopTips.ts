import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-toptips.less'
import '../../../weui/widget/weui-tips/weui-mask.less'

import { defineComponent, h } from 'vue'

import { fadeIn } from '../../utils/animate'

const TopTipsProps = {
  type: {
    type: String,
    default: 'info'
  },
  visible: {
    type: Boolean,
    default: false
  }
}

const TopTips = defineComponent({
  props: TopTipsProps,

  setup(props, { slots }) {
    return () => {
      if (!props.visible) return
      return h(
        'div',
        {
          class: `weui-toptips weui-toptips_${props.type}`
        },
        slots.default ? h(slots.default) : ''
      )
    }
  }
})

const TopTipsAnimate = defineComponent({
  name: 'TopTips',

  props: TopTipsProps,

  setup(props, { slots }) {
    return () => fadeIn(h(TopTips, { ...props }, { ...slots }))
  }
})

export default TopTipsAnimate
