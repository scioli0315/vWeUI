<template>
  <div class="page">
    <Form title="文本域">
      <CellGroup title="问题描述">
        <TextArea v-model="value" :maxlength="20" placeholder="请描述你所发生的问题" />
      </CellGroup>

      <template #desc>
        输入更多内容的输入区域样式展示
      </template>
      <template #opr>
        <Button type="primary" @onClick="showValue">确定</Button>
      </template>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Toast } from '../../../src'
export default defineComponent({
  setup() {
    const value = ref('')

    const showValue = () => {
      Toast(value.value)
    }

    return {
      value,
      showValue
    }
  }
})
</script>
