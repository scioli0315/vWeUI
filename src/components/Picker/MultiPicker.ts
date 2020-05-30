import '../../../weui/base.less'
import '../../../weui/widget/weui-picker/weui-picker.less'

import { defineComponent, h, ref } from 'vue'

import { isArray } from '../../utils'
import { button } from '../../utils/button'
import { halfScreenAnimate } from '../HalfScreenDialog/util'
import Group from './Group'
import { GroupChangeValue, PickerMultiOptions, pickerProps } from './type'
import { addPreZero, getDays, getDefaultDate, getMonthLength, setDateDefaultValue } from './util'

const MultiPicker = defineComponent({
  props: {
    ...pickerProps,
    isDate: Boolean,
    options: {
      type: Array,
      default: null
    },
    year: {
      type: String,
      default: ''
    },
    month: {
      type: String,
      default: ''
    },
    day: {
      type: String,
      default: ''
    },
    setValue: {
      type: Function,
      required: true
    }
  },

  setup(props, { emit }) {
    if (
      (!props.isDate && (!props.options || !isArray(props.options))) ||
      (props.defaultValue && !isArray(props.defaultValue))
    )
      return

    const visible = ref()
    const value = ref()
    const column = props.isDate ? 3 : props.options.length > 3 ? 3 : props.options.length
    const label = ref(new Array(column))
    const options = ref()

    const { year, month, years, months, today } = getDefaultDate(
      props.isDate as boolean,
      props.year,
      props.day
    )
    if (props.isDate) {
      options.value = [years, months, getDays(+year, +month, props.day)]
    }

    if (props.defaultValue && props.defaultValue.length > 0) {
      value.value = [...setDateDefaultValue(props.defaultValue, column, props.isDate as boolean)]
    } else {
      value.value = props.isDate ? [year, month, today] : new Array(column)
    }

    const onHide = () => {
      props['onUpdate:visible'](false)
    }

    const onCancel = () => {
      emit('onCancel')
      onHide()
    }

    const handerClose = (event: Event) => {
      event.stopPropagation()
      onCancel()
    }

    const emitOnChange = (type: string) => {
      if (props.isDate) {
        props.setValue(type, { value: Array.from(value.value), label: Array.from(value.value) })
      } else {
        props.setValue(type, { value: Array.from(value.value), label: Array.from(label.value) })
      }
    }

    const onConfirm = () => {
      emitOnChange('onConfirm')
      onHide()
    }

    const onChangeDate = (isDefault = false) => {
      options.value = [years, months, getDays(value.value[0], value.value[1], props.day)]
      const len = getMonthLength(value.value[0], value.value[1])
      if (len < value.value[2]) {
        value.value[2] = addPreZero(len)
      }
      if (isDefault) return
      emitOnChange('onChange')
    }

    const onChange = (val: GroupChangeValue, isDefault = false) => {
      label.value[val.k] = val.item.label
      if (
        value.value[val.k] !== undefined &&
        value.value[val.k].toString() === val.item.value.toString()
      )
        return
      value.value[val.k] = val.item.value
      props.isDate ? onChangeDate(isDefault) : isDefault ? '' : emitOnChange('onChange')
    }

    const ft = () => button({ type: 'primary' }, onConfirm, props.confirm)

    const _group = () => {
      const groups = []
      for (let i = 0; i < column; i++) {
        groups.push(
          h(Group, {
            k: i,
            items: (options.value as PickerMultiOptions)[i],
            defaultValue: value.value[i],
            disabled: props.disabled,
            onChange
          })
        )
      }
      return groups
    }

    const _default = () => h('div', { class: 'weui-picker__bd' }, _group())

    return () => {
      visible.value = props.visible
      if (!props.isDate) {
        options.value = props.options
      }

      return halfScreenAnimate(
        {
          title: props.title,
          showClose: props.showClose as boolean,
          visible: visible.value,
          'onUpdate:visible': onCancel
        },
        {
          default: _default,
          ft
        },
        handerClose,
        onCancel,
        onCancel
      )
    }
  }
})

export default MultiPicker
