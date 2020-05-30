import '../../../weui/base.less'
import '../../../weui/widget/weui-tips/weui-actionsheet.less'
import '../../../weui/widget/weui-tips/weui-mask.less'

import { defineComponent, h, VNode } from 'vue'

import { isArray } from '../../utils'
import { fadeIn, upDown } from '../../utils/animate'
import Mask from '../Mask'
import { ActionSheetOptions } from './type'

const actionSheetProps = {
  cancelText: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'ios'
  },
  visible: Boolean,
  ['onUpdate:visible']: {
    type: Function,
    default: null
  }
}

const Toggle = defineComponent({
  props: {
    ...actionSheetProps,
    onCancel: {
      type: Function,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const handerCancel = (event: Event) => {
      event.stopPropagation()
      props.onCancel()
    }

    const getTitle = () => {
      if (!props.title) return ''
      return h(
        'div',
        { class: 'weui-actionsheet__title' },
        h('p', { class: 'weui-actionsheet__title-text' }, props.title)
      )
    }

    const toggle = (childs: Array<VNode | ''>) =>
      h(
        'div',
        {
          class: `weui-actionsheet ${props.visible ? 'weui-actionsheet_toggle' : ''}`
        },
        childs.map((c) => c)
      )

    const getCancel = () => {
      if (!props.cancelText) return ''
      return h(
        'div',
        { class: 'weui-actionsheet__action' },
        h(
          'div',
          {
            class: 'weui-actionsheet__cell',
            onClick: handerCancel
          },
          props.cancelText
        )
      )
    }

    const getOptions = (ops: ActionSheetOptions) =>
      h('div', { class: 'weui-actionsheet__menu' }, [
        ops.map((item, index: number) =>
          h(
            'div',
            {
              class: `weui-actionsheet__cell ${item.warn ? 'weui-actionsheet__cell_warn' : ''} ${
                item.disabled ? 'weui-actionsheet__cell_disabled' : ''
              }`,
              warn: item.warn,
              onClick: (event: Event) => {
                if (item.disabled) return
                event.stopPropagation()
                props.onSelect(item.value || index, item.label)
              }
            },
            item.label
          )
        )
      ])

    return () => {
      if (!props.visible) return
      const ops = props.options as ActionSheetOptions

      const ios = toggle([getTitle(), getOptions(ops), getCancel()])
      const android = toggle([getOptions(ops)])
      return props.type === 'ios' ? ios : android
    }
  }
})

const ActionSheet = defineComponent({
  name: 'ActionSheet',

  props: actionSheetProps,

  setup(props, { emit }) {
    const onHide = () => {
      if (props['onUpdate:visible']) props['onUpdate:visible'](false)
    }

    const onSelect = (value: string | number, label: string | number) => {
      emit('onSelect', { value, label })
      onHide()
    }

    const onCancel = () => {
      emit('onCancel')
      onHide()
    }

    const handerCancel = (event: Event) => {
      event.stopPropagation()
      onCancel()
    }

    const getMask = () => fadeIn(h(Mask, { visible: props.visible, onClose: handerCancel }))

    return () => {
      if (!props.options || !isArray(props.options)) return

      const ios = h('div', [
        getMask(),
        upDown(h(Toggle, { ...props, onCancel: onCancel, onSelect: onSelect }))
      ])
      const android = h('div', { class: 'weui-skin_android' }, [
        getMask(),
        fadeIn(h(Toggle, { ...props, onCancel: onCancel, onSelect: onSelect }))
      ])

      return props.type === 'ios' ? ios : android
    }
  }
})

export default ActionSheet
