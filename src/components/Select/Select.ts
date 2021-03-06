import '../../../weui/base.less'
import '../../../weui/widget/weui-cell/weui-cell_global.less'
import '../../../weui/widget/weui-cell/weui-access.less'

import { defineComponent, h, ref } from 'vue'

import { getPropsWidth } from '../../utils'
import { getBd, getCell, getFt, getHd } from '../../utils/cell'
import MultiPicker from '../Picker/MultiPicker'
import { PickerMultiOptions, PickerValue } from '../Picker/type'
import { selectProps } from './type'

const Select = defineComponent({
  name: 'Select',

  props: selectProps,

  setup(props, { attrs }) {
    const defaultValue = props.modelValue || props.value

    const visible = ref(false)
    const inputValue = ref()

    const setValue = (type: string, { value, label: labels }: PickerValue) => {
      if (type === 'onChange') return
      if (props['onUpdate:modelValue']) props['onUpdate:modelValue'](value)
      inputValue.value = labels.join(' / ')
    }

    const setDefaultInputValue = () => {
      if (defaultValue === null) return

      const options = props.options as PickerMultiOptions
      const labels = []
      for (const index in options) {
        const items = options[index]
        for (const item of items) {
          if (labels.length === options.length) {
            break
          }
          if (item.value === defaultValue[index]) {
            labels.push(item.label)
          }
        }
      }
      inputValue.value = labels.join('/')
    }
    setDefaultInputValue()

    return () => {
      const cla = `weui-cell_active weui-cell_access weui-cell_select`
      const hd = getHd(
        h(
          'label',
          { class: 'weui-label', style: { width: getPropsWidth(props.labelWidth) } },
          props.label
        )
      )
      const bd = getBd(
        [
          h('input', {
            ...attrs,
            class: 'weui-input',
            disabled: props.disabled,
            placeholder: props.placeholder,
            readonly: true,
            value: inputValue.value,
            onClick: () => {
              visible.value = true
            }
          })
        ],
        'weui-flex'
      )

      const ft = getFt('')

      return [
        getCell([hd, bd, ft], null, cla),
        h(MultiPicker, {
          options: props.options,
          title: props.title,
          visible: visible.value,
          defaultValue: props.modelValue || props.value,
          'onUpdate:visible': (value: boolean) => {
            visible.value = value
          },
          setValue
        })
      ]
    }
  }
})

export default Select
