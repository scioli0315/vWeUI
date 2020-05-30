import { defineComponent, h, Ref, ref, watch } from 'vue'

import { isArray } from '../../utils'
import { group } from './content'
import { getDefaultIndex, getEvent, getMaxMin, getTranslate } from './scroll'
import { GroupChangeValue, PickerOptions } from './type'

const groupProps = {
  disabled: Boolean,
  k: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    required: true
  },
  defaultValue: {
    type: [Number, String],
    default: null
  },
  onChange: {
    type: Function,
    default: null
  }
}

const Group = defineComponent({
  props: groupProps,

  setup(props) {
    if (!props.items || !isArray(props.items)) return

    const defaults = {
      offset: 2,
      rowHeight: 48,
      temp: NaN,
      bodyHeight: 5 * 48
    }
    let start = -1
    let end = 0
    let startTime = 0
    let translate = 0
    let index = 0
    const points: Array<{ time: number; y: number }> = []

    const time = ref(0)
    const diff = ref(0)
    const defaultValue = ref(props.defaultValue)
    const refGroup: Ref<Element | null> = ref(null)

    const onChange = (val: GroupChangeValue, isDefault = false) => {
      if (!props.onChange) return
      props.onChange(val, isDefault)
    }

    const setDefaultValue = () => {
      const items = props.items as PickerOptions
      index = getDefaultIndex(items)
      translate = getTranslate(defaults.offset, defaults.rowHeight, index)
      diff.value = translate
      onChange({ k: props.k, index, item: { ...items[index] } }, true)
    }

    const setTranslate = () => {
      const items = props.items as PickerOptions
      index = items.findIndex((c) => c.value === props.defaultValue)
      if (index >= 0) {
        translate = getTranslate(defaults.offset, defaults.rowHeight, index)
        diff.value = translate
        onChange({ k: props.k, index, item: { ...items[index] } }, true)
      } else {
        // 值不存在
        setDefaultValue()
      }
    }

    if (props.defaultValue !== null) {
      setTranslate()
    } else {
      // 没有默认值
      setDefaultValue()
    }

    const stop = (_diff: number) => {
      const items = props.items as PickerOptions

      translate += _diff

      // 移动到最接近的那一行
      translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight

      // 不要超过最大值或者最小值
      const { max, min } = getMaxMin(defaults.offset, defaults.rowHeight, items.length)
      if (translate > max) {
        translate = max
      }
      if (translate < min) {
        translate = min
      }

      let index = defaults.offset - translate / defaults.rowHeight
      // 如果是 disabled 的就跳过
      while (!!items[index] && items[index].disabled) {
        diff.value > 0 ? ++index : --index
      }
      translate = (defaults.offset - index) * defaults.rowHeight

      time.value = 0.3
      diff.value = translate

      onChange({ k: props.k, index, item: { ...items[index] } })
    }

    const onStart = (pageY: number) => {
      start = pageY
      startTime = +new Date()
    }

    const onMove = (pageY: number) => {
      if (start < 0) return
      end = pageY

      time.value = 0
      diff.value = translate + end - start

      points.push({ time: startTime, y: end })
      if (points.length > 40) {
        points.shift()
      }
    }

    const onEnd = (pageY: number) => {
      if (start < 0) return
      const endTime = new Date().getTime()
      const relativeY = refGroup.value
        ? refGroup.value.getBoundingClientRect().top + defaults.bodyHeight / 2
        : 0
      end = pageY

      if (endTime - startTime > 100) {
        if (Math.abs(end - start) > 10) {
          stop(end - start)
        } else {
          stop(relativeY - end)
        }
      } else {
        if (Math.abs(end - start) > 10) {
          const endPos = points.length - 1
          let startPos = endPos
          for (let i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
            startPos = i
          }

          if (startPos !== endPos) {
            const ep = points[endPos]
            const sp = points[startPos]
            const t = ep.time - sp.time
            const s = ep.y - sp.y
            const v = s / t
            stop(v * 150 + (end - start))
          } else {
            stop(0)
          }
        } else {
          stop(relativeY - end)
        }
      }

      start = -1
    }

    watch([defaultValue], () => {
      setTranslate()
    })

    return () => {
      const items = props.items as PickerOptions
      defaultValue.value = props.defaultValue

      if (props.disabled) {
        return h('div', { class: 'weui-picker__group' }, group(items, diff, time))
      }

      return h(
        'div',
        { class: 'weui-picker__group', ref: refGroup, ...getEvent(onStart, onMove, onEnd) },
        group(items, diff, time)
      )
    }
  }
})

export default Group
