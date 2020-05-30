<template>
  <div class="page">
    <Form title="单选框样式展示">
      <CellGroup>
        <Radio v-model="value" :options="options" />
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
    const value = ref(2)
    const options = ref([
      { value: 0, label: 'cell standard' },
      { value: 1, label: 'cell standard', disabled: true },
      { value: 2, label: 'cell standard' }
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
