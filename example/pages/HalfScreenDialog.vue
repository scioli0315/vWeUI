<template>
  <Page desc="半屏组件" title="Half-screen Dialog">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="dialog1 = true">样式一</Button>
      <Button @onClick="dialog2 = true">样式二</Button>
    </div>

    <HalfScreenDialog v-model:visible="dialog1" title="标题" @onCancel="onClick('cancel')">
      <br />
      <br />
      可放自定义内容
      <br />
      <br />
      <br />
      <br />
    </HalfScreenDialog>

    <HalfScreenDialog
      v-model:visible="dialog2"
      show-more
      subtitle="标题"
      title="标题"
      @onCancel="onClick('cancel')"
      @onMore="onClick('more')"
    >
      <p class="weui-half-screen-dialog__desc">
        辅助描述内容，可根据实际需要安排
      </p>
      <p class="weui-half-screen-dialog__tips">
        辅助提示内容，可根据实际需要安排
      </p>
      <template #ft>
        <Button>辅助操作</Button>
        <Button type="primary">主操作</Button>
      </template>
    </HalfScreenDialog>
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const dialog1 = ref(false)
    const dialog2 = ref(false)

    const onClick = (msg: string) => {
      console.log(msg)
    }

    return {
      dialog1,
      dialog2,
      onClick
    }
  }
})
</script>
