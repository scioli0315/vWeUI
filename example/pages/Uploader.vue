<template>
  <Page desc="上传组件，一般配合组件Gallery来使用。" title="Uploader">
    <div class="page__bd">
      <Uploader v-model:files="files" @onChange="onChange" />
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

import pic160 from '../images/pic_160.png'
import Page from './common/Page.vue'

type fileType = {
  src?: any
  data?: string | ArrayBuffer | null
  status?: number | undefined
}

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const files: Ref<Array<fileType>> = ref([
      {
        src: pic160
      },
      {
        src: pic160,
        status: -1
      },
      {
        src: pic160,
        status: 50
      }
    ])

    const onChange = (fileList: Array<File>) => {
      fileList.forEach((file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          files.value.push({
            data: reader.result
          })
        }
      })
    }

    return {
      files,
      onChange
    }
  }
})
</script>
