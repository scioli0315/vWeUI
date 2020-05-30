<template>
  <div class="page form">
    <Form title="输入框状态">
      <template #desc>
        可体验表单输入样式，当输入位数不等于16位的时候点击按钮可看到报错样式。
      </template>

      <CellGroup title="表单报错">
        <VInput
          v-model="value"
          autofocus
          label="卡号"
          :maxlength="16"
          placeholder="请输入16位数卡号"
        />
      </CellGroup>

      <CellGroup title="表单只读、置灰">
        <VInput label="EMail" placeholder="请输入EMail" readonly value="1234567" />
        <VInput disabled label="微信号" placeholder="请输入微信号" value="WeUI" />
      </CellGroup>

      <template #opr>
        <Button :disabled="value.length === 0" type="primary" @onClick="showValue">确定</Button>
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
      Toast.success(value.value.toString())
    }

    return {
      value,
      showValue
    }
  }
})
</script>
