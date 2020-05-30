<template>
  <Page desc="表单预览" title="Preview">
    <div class="page__bd">
      <Preview confirm-text="操作" :show-cancel="false" @onConfirm="onClick('操作')">
        <template #hd>
          <PreviewItem label="付款金额">¥2400.00</PreviewItem>
        </template>
        <PreviewItem label="商品">电动打蛋机</PreviewItem>
        <PreviewItem label="标题标题">名字名字名字</PreviewItem>
        <PreviewItem label="标题标题"
          >很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</PreviewItem
        >
      </Preview>
      <br />
      <Preview
        cancel-text="辅助操作"
        confirm-text="操作"
        @onCancel="onClick('辅助操作')"
        @onConfirm="onClick('操作')"
      >
        <template #hd>
          <PreviewItem label="付款金额">¥2400.00</PreviewItem>
        </template>
        <PreviewItem label="商品">电动打蛋机</PreviewItem>
        <PreviewItem label="标题标题">名字名字名字</PreviewItem>
        <PreviewItem label="标题标题"
          >很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</PreviewItem
        >
      </Preview>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const onClick = (msg: string) => {
      console.log(msg)
    }

    return {
      onClick
    }
  }
})
</script>
