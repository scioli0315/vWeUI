import { h, VNode } from 'vue'

import { ButtonProps } from '../components/Button/type'
import { stopPropagation } from './index'

export const button = (
  props: ButtonProps,
  onClick: (event: Event) => void,
  children: VNode | string,
  attrs?: { [key: string]: unknown }
) => {
  const getClass = () => {
    const cell = props.cell ? '_cell' : ''
    const type = `${props.cell ? '-' : '_'}${props.type || 'default'}`
    let cla = `weui-btn${cell}`

    // ['primary', 'default', 'warn']
    cla += ` weui-btn${cell}${type}`
    cla += props.mini ? ' weui-btn_mini' : ''
    cla += props.disabled ? ' weui-btn_disabled' : ''
    cla += props.disabled ? ' weui-btn_disabled' : ''

    return cla
  }

  const getLoading = () => {
    if (!props.loading) return ''
    return h('i', {
      class: 'weui-loading'
    })
  }

  const _onClick = (event: Event) => {
    if (props.loading || props.disabled) return
    stopPropagation(event)
    onClick(event)
  }

  return h(
    'button',
    {
      ...attrs,
      class: getClass(),
      onClick: _onClick,
      disabled: props.disabled
    },
    [getLoading(), children]
  )
}
