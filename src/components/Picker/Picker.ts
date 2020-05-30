import { defineComponent, h } from 'vue'

import MultiPicker from './MultiPicker'
import { pickerProps, PickerValue } from './type'

const Picker = defineComponent({
  name: 'Picker',

  props: {
    ...pickerProps,
    options: {
      type: Array,
      required: true
    }
  },

  setup(props, { emit }) {
    const setValue = (type: string, value: PickerValue) => {
      emit(type, value)
    }

    return () => h(MultiPicker, { ...props, setValue })
  }
})

export default Picker
