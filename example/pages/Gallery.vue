<template>
  <Page desc="画廊，可实现上传图片的展示或幻灯片播放" title="Gallery">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="show = true">显示 Gallery</Button>
    </div>
    <Gallery v-model:visible="show" show-delete :src="picArticle" @onDelete="onDelete" />
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import picArticle from '../images/pic_article.png'
import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const show = ref(false)

    const onDelete = () => {
      console.log('delete')
    }

    return {
      show,
      onDelete,
      picArticle
    }
  }
})
</script>
