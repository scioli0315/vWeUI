<template>
  <Page desc="表单页" title="Form">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="go('form_page')">表单结构</Button>
      <Button @onClick="go('form_input_status')">输入框状态</Button>
      <Button @onClick="go('form_vcode')">验证码</Button>
      <Button @onClick="go('form_checkbox')">复选框</Button>
      <Button @onClick="go('form_radio')">单选框</Button>
      <Button @onClick="go('form_switch')">开关</Button>
      <!-- <Button @onClick="go('form_select')">原生选择框</Button> -->
      <Button @onClick="go('form_select_primary')">模拟选择框</Button>
      <Button @onClick="go('form_textarea')">文本域</Button>
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
