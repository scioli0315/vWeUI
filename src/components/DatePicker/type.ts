export const datePickerProps = {
  disabled: Boolean,
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: [String, Number],
    default: null
  },
  placeholder: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
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
  value: {
    type: [],
    default: null
  },
  modelValue: {
    type: [Array],
    default: null
  },
  ['onUpdate:modelValue']: {
    type: Function,
    default: null
  }
}
