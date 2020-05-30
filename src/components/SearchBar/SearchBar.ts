import '../../../weui/base.less'
import '../../../weui/widget/weui-searchbar/weui-searchbar.less'

import { defineComponent, h, Ref, ref } from 'vue'

import { stopPropagation } from '../../utils'

const SearchBar = defineComponent({
  name: 'SearchBar',

  props: {
    cancelText: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    ['onUpdate:modelValue']: {
      type: Function,
      default: null
    }
  },

  setup(props, { attrs, emit }) {
    const focus = ref(false)
    const refInput: Ref<HTMLOrSVGElement | null> = ref(null)

    const getIcon = () => h('i', { class: 'weui-icon-search' })

    const setValue = (val: string) => {
      if (props['onUpdate:modelValue']) props['onUpdate:modelValue'](val)
    }

    const onBlur = (event: Event) => {
      stopPropagation(event)
      if (!focus.value || props.modelValue.toString().length > 0) return

      setTimeout(() => {
        focus.value = false
      })
    }

    const onClear = (event: Event) => {
      stopPropagation(event)

      setValue('')
      focus.value = true
      refInput.value?.focus()
      emit('onClear', event)
    }

    const onCancel = (event: Event) => {
      stopPropagation(event)

      setValue('')
      focus.value = false
      refInput.value?.blur()
      emit('onCancel', event)
    }

    const onFocus = (event: Event) => {
      stopPropagation(event)
      if (focus.value) return

      setValue('')
      focus.value = true
      refInput.value?.focus()
    }

    const getClear = () => {
      if (props.modelValue.toString().length === 0) return
      return h('a', { class: 'weui-icon-clear', href: 'javascript:', onClick: onClear })
    }

    const onInput = (event: any) => {
      stopPropagation(event)

      const target = event.target || { value: '' }
      setValue(target.value)
      emit('onChange', target.value)
    }

    const getInput = () =>
      h('input', {
        ...attrs,
        ref: refInput,
        class: 'weui-search-bar__input',
        type: 'search',
        placeholder: props.placeholder,
        onInput,
        onBlur,
        value: props.modelValue.toString()
      })

    const getCancel = () => {
      if (!props.cancelText) return ''
      return h(
        'a',
        { class: 'weui-search-bar__cancel-btn', href: 'javascript:', onClick: onCancel },
        props.cancelText
      )
    }

    const onSearch = (event: Event) => {
      stopPropagation(event)

      emit('onSearch', event)
    }

    return () =>
      h(
        'div',
        {
          class: `weui-search-bar ${
            focus.value || props.modelValue.toString().length > 0 ? 'weui-search-bar_focusing' : ''
          }`
        },
        [
          h('form', { class: 'weui-search-bar__form', onSubmit: onSearch }, [
            h(
              'div',
              {
                class: 'weui-search-bar__box'
              },
              [getIcon(), getInput(), getClear()]
            ),
            h('label', { class: 'weui-search-bar__label', onClick: onFocus }, [
              getIcon(),
              h('span', props.placeholder)
            ])
          ]),
          getCancel()
        ]
      )
  }
})

export default SearchBar
