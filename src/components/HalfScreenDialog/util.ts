import { h, Slots, VNode } from 'vue'

import { fadeIn, upDown } from '../../utils/animate'
import Mask from '../Mask'
import { HalfScreen } from './HalfScreen'
import { HalfScreenProps } from './type'

export const halfScreenAnimate = (
  props: HalfScreenProps,
  slots: Slots | { [key: string]: () => VNode },
  handerClose: (event: Event) => void,
  onCancel: () => void,
  onMore: () => void,
  cla = ''
) => {
  return h('div', [
    fadeIn(h(Mask, { visible: props.visible, onClose: handerClose })),
    upDown(
      h(
        HalfScreen,
        {
          ...props,
          onMore: onMore,
          onCancel,
          class: cla
        },
        {
          ...slots
        }
      )
    )
  ])
}
