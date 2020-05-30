export const selectProps = {
  disabled: Boolean,
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: [String, Number],
    default: null
  },
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  title: {
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
