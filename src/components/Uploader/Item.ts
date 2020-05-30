import { defineComponent, h } from 'vue'

import { stopPropagation } from '../../utils'

type fileType = {
  src?: string
  data?: string | ArrayBuffer
  status: number | undefined
}

const Item = defineComponent({
  props: {
    file: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  setup(props, { emit }) {
    const getFile = (f: fileType) => {
      let cla = ''
      let fileContent
      if (f.status === 100 || !f.status) {
        fileContent = () => ''
      } else {
        cla = 'weui-uploader__file_status'
        if (f.status < 0) {
          fileContent = () =>
            h('div', { class: 'weui-uploader__file-content' }, h('i', { class: 'weui-icon-warn' }))
        } else {
          fileContent = () => h('div', { class: 'weui-uploader__file-content' }, `${f.status}%`)
        }
      }

      return h(
        'li',
        {
          class: `weui-uploader__file ${cla}`,
          style: { 'background-image': `url(${f.data || f.src})` },
          onClick: (event: Event) => {
            stopPropagation(event)
            const data = f.data || f.src || ''
            emit('showItem', { src: data, key: props.index })
          }
        },
        fileContent()
      )
    }

    return () => getFile(props.file as fileType)
  }
})

export default Item
