export interface HalfScreenProps {
  showClose?: boolean
  showMore?: boolean
  subtitle?: string
  title?: string
  visible: boolean
  ['onUpdate:visible']: (event: Event) => void
}

export const halfScreenProps = {
  showClose: {
    type: Boolean,
    default: true
  },
  showMore: Boolean,
  subtitle: {
    type: String,
    default: ''
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
