<template>
  <div class="page form">
    <Form title="验证码">
      <template #desc>验证手机号样式</template>

      <CellGroup>
        <VInput v-model="phone" label="手机号" placeholder="请输入手机号" type="number">
          <template #ft>
            <Icon size="24" type="info-circle" @click="dialog = true" />
          </template>
        </VInput>

        <VInput
          v-model="code"
          autofocus
          label="验证码"
          :maxlength="6"
          placeholder="输入验证码"
          vcode
        >
          <template #ft>
            <Button mini>获取验证码</Button>
          </template>
        </VInput>
      </CellGroup>

      <template #oprTips>
        <Agree v-model="agree">阅读并同意<a href="javascript:">《相关条款》</a></Agree>
      </template>

      <template #opr>
        <Button :disabled="!agree" type="primary">确定</Button>
      </template>
    </Form>

    <HalfScreenDialog v-model:visible="dialog" title="标题">
      <br />
      <br />
      可放自定义内容
      <br />
      <br />
      <br />
      <br />
    </HalfScreenDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const agree = ref(false)
    const phone = ref('12345678907')
    const code = ref('')
    const dialog = ref(false)

    return {
      agree,
      phone,
      code,
      dialog
    }
  }
})
</script>
