export type PickerValue = {
  label: Array<string | number>
  value: Array<string | number>
}

export type PickerOption = {
  label: string | number
  value: string | number
  disabled?: boolean
  children?: Array<PickerOption>
}

export type GroupChangeValue = {
  k: number
  index: number
  item: PickerOption
}

export type PickerOptions = Array<PickerOption>
export type PickerMultiOptions = Array<PickerOptions>

export const pickerProps = {
  disabled: Boolean,
  confirm: {
    type: String,
    default: '确定'
  },
  defaultValue: {
    type: Array,
    default: null
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: false
  },
  ['onUpdate:visible']: {
    type: Function,
    default: null
  }
}
