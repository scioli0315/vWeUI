<template>
  <div class="page">
    <Form title="复选框样式展示">
      <CellGroup>
        <Checkbox v-model="value" :options="options" />
      </CellGroup>

      <template #opr>
        <Button type="primary" @onClick="showValue">确定</Button>
      </template>
      <template #extraTips>点击下一步即表示<a href="javascript:">同意用户协议</a></template>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Toast } from '../../../src'
export default defineComponent({
  setup() {
    const value = ref([0])
    const options = ref([
      { value: 0, label: 'standard is dealt for u.' },
      { value: 1, label: 'standard is dealt for u.', disabled: true },
      { value: 2, label: 'standard is dealicient for u.' }
    ])

    const showValue = () => {
      Toast.success(value.value.toString())
    }

    return {
      value,
      options,
      showValue
    }
  }
})
</script>
