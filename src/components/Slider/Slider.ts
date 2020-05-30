import '../../../weui/base.less'
import '../../../weui/widget/weui-slider/weui-slider.less'

import { defineComponent, h, Ref, ref } from 'vue'

import { stopPropagation } from '../../utils'

const Slider = defineComponent({
  name: 'Slider',

  props: {
    showValue: Boolean,
    src: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Number,
      default: 0
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs }) {
    const refInner: Ref<HTMLElement | null> = ref(null)
    const getModelValue = () =>
      props.modelValue < 0 ? 0 : props.modelValue > 100 ? 100 : props.modelValue

    let totalLen = 0
    let startLeft = 0
    let startX = 0

    const onTouchstart = (event: TouchEvent) => {
      stopPropagation(event)
      totalLen = refInner.value?.clientWidth || 0
      startLeft = (getModelValue() * totalLen) / 100
      startX = event.changedTouches[0].clientX
    }

    const onTouchmove = (event: TouchEvent) => {
      stopPropagation(event)
      let dist = startLeft + event.changedTouches[0].clientX - startX
      dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist
      const percent = (dist / totalLen) * 100

      props['onUpdate:modelValue'](parseInt(percent.toString()))
    }

    const getValue = () => {
      if (!props.showValue) return ''
      return h(
        'div',
        {
          class: 'weui-slider-box__value'
        },
        props.modelValue
      )
    }

    return () =>
      h(
        'div',
        {
          ...attrs,
          class: 'weui-slider-box'
        },
        [
          h(
            'div',
            {
              class: 'weui-slider'
            },
            h('div', { class: 'weui-slider__inner', ref: refInner }, [
              h('div', { class: 'weui-slider__track', style: { width: `${getModelValue()}%` } }),
              h('div', {
                class: 'weui-slider__handler',
                style: { left: `${getModelValue()}%` },
                onTouchstart: onTouchstart,
                onTouchmove: onTouchmove
              })
            ])
          ),
          getValue()
        ]
      )
  }
})

export default Slider
