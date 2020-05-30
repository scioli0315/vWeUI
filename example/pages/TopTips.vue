<template>
  <Page desc="顶部提示条" title="TopTips">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="onClick(true, 'warn', '警告')">警告提示条</Button>
      <Button @onClick="onClick(true, 'primary', '成功')">成功提示条</Button>
      <Button @onClick="onClick(true, 'info', '信息')">信息提示条</Button>
      <Button @onClick="onClick(false)">隐藏提示条</Button>
    </div>

    <TopTips :type="type" :visible="visible">{{ message }}</TopTips>
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
    const visible = ref(false)
    const type = ref('info')
    const message = ref('message')

    const onClick = (v: boolean, t = 'info', m = '') => {
      visible.value = v
      if (!v) return
      type.value = t
      message.value = m
    }

    return {
      visible,
      type,
      message,
      onClick
    }
  }
})
</script>
