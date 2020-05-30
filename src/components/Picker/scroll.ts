import { stopPropagation } from '../../utils'
import { PickerOptions } from './type'

export const getMaxMin = (offset: number, rowHeight: number, length: number) => {
  return {
    max: offset * rowHeight,
    min: -(rowHeight * (length - offset - 1))
  }
}

export const getDefaultIndex = (items: PickerOptions) => {
  let current = Math.floor(items.length / 2)
  let count = 0
  while (!!items[current] && items[current].disabled) {
    current = ++current % items.length
    count++

    if (count > items.length) {
      throw new Error('No selectable item.')
    }
  }

  return current
}

export const getTranslate = (offset: number, rowHeight: number, index: number) => {
  return rowHeight * (offset - index)
}

type OnEvent = (value: number) => void
export const getEvent = (onStart: OnEvent, onMove: OnEvent, onEnd: OnEvent) => {
  // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
  const isSupportTouch =
    'ontouchstart' in window ||
    ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch)
  if (isSupportTouch) {
    return {
      onTouchStart: (event: TouchEvent) => {
        stopPropagation(event)
        onStart(event.changedTouches[0].pageY)
      },
      onTouchMove: (event: TouchEvent) => {
        stopPropagation(event)
        onMove(event.changedTouches[0].pageY)
      },
      onTouchEnd: (event: TouchEvent) => {
        stopPropagation(event)
        onEnd(event.changedTouches[0].pageY)
      }
    }
  } else {
    return {
      onMousedown: (event: MouseEvent) => {
        stopPropagation(event)
        onStart(event.pageY)
      },
      onMousemove: (event: MouseEvent) => {
        stopPropagation(event)
        onMove(event.pageY)
      },
      onMouseup: (event: MouseEvent) => {
        stopPropagation(event)
        onEnd(event.pageY)
      },
      onMouseleave: (event: MouseEvent) => {
        stopPropagation(event)
        onEnd(event.pageY)
      }
    }
  }
}
