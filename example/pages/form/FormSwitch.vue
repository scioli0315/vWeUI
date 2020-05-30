<template>
  <div class="page">
    <Form title="开关样式展示">
      <CellGroup>
        <Switch v-model="value" label="标题文字" />
      </CellGroup>
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
    const value = ref(true)

    const showValue = () => {
      Toast.success(value.value.toString())
    }

    return {
      value,
      showValue
    }
  }
})
</script>
