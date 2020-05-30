import { defineComponent, h } from 'vue'

const Panel = defineComponent({
  name: 'Panel',

  setup(props, { attrs, slots }) {
    const getHd = () => {
      if (!slots.icon) return ''
      return h('div', { class: 'weui-media-box__hd' }, h(slots.icon))
    }

    const getTitle = () =>
      h('h4', { class: 'weui-media-box__title' }, slots.default ? h(slots.default) : '')

    const getDesc = () =>
      h('div', { class: 'weui-media-box__desc' }, slots.desc ? h(slots.desc) : '')

    const getInfo = () => {
      if (!slots.info) return ''
      return h('ul', { class: 'weui-media-box__info' }, h(slots.info))
    }

    const getBd = () =>
      h('div', { class: 'weui-media-box__bd' }, [getTitle(), getDesc(), getInfo()])

    return () =>
      h(
        'div',
        {
          ...attrs,
          class: `weui-media-box ${slots.icon ? 'weui-media-box_appmsg' : 'weui-media-box_text'}`
        },
        [getHd(), getBd()]
      )
  }
})

export default Panel
