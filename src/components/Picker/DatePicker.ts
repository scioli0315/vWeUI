import { defineComponent, h } from 'vue'

import MultiPicker from './MultiPicker'
import { pickerProps, PickerValue } from './type'

const DatePicker = defineComponent({
  name: 'DatePicker',

  props: {
    ...pickerProps,
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
    }
  },

  setup(props, { emit }) {
    const setValue = (type: string, value: PickerValue) => {
      emit(type, value)
    }
    return () => h(MultiPicker, { ...props, isDate: true, setValue })
  }
})

export default DatePicker
