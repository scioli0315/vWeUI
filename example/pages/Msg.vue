<template>
  <Page desc="提示页" title="Msg">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="go('/msg_success')">成功提示页</Button>
      <Button @onClick="go('/msg_warn')">失败提示页</Button>
      <Button @onClick="go('/msg_text')">无图标提示页</Button>
      <Button @onClick="go('/msg_text_primary')">无图标提示页</Button>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },
  setup() {
    const router = useRouter()

    const go = (link: string) => {
      router.push(link)
    }

    return {
      go
    }
  }
})
</script>
