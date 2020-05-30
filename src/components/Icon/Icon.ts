import '../../../weui/base.less'

import { defineComponent, h } from 'vue'

import { getPropsWidth } from '../../utils'

const Icon = defineComponent({
  name: 'Icon',

  props: {
    type: {
      type: String,
      default: 'success' // success info warn warn_primary waiting
    },
    size: {
      type: [Number, String],
      default: 64
    }
  },

  setup(props, { attrs }) {
    const getClass = () => {
      if (props.type === 'warn-primary') {
        return 'weui-icon_msg-primary weui-icon-warn'
      } else {
        return `weui-icon_msg weui-icon-${props.type}`
      }
    }

    const getSize = () => {
      if (+props.size === 64) return ''
      const w = getPropsWidth(props.size)

      return { width: w, height: w }
    }

    return () => h('i', { ...attrs, class: getClass(), style: getSize() })
  }
})

export default Icon
