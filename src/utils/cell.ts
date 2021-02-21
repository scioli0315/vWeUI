import { h, VNode } from 'vue'

type OnClick = (event: Event) => void
type Children = VNode | string | Array<VNode | string>

export const getCell = (
  children: Array<VNode | string>,
  onClick: OnClick | null,
  cla = '',
  type = 'div'
) => {
  const rawProps: any = {
    class: `weui-cell ${cla}`
  }
  if (onClick) {
    rawProps.onClick = onClick
  }

  return h(type, rawProps, children)
}

export const getHd = (children: Children) => {
  return h('div', { class: 'weui-cell__hd' }, children)
}

export const getBd = (children: Children, cla = '') => {
  return h('div', { class: `weui-cell__bd ${cla}` }, children)
}

export const getFt = (children: Children) => {
  return h('div', { class: 'weui-cell__ft' }, children)
}
