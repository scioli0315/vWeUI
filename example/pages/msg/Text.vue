<template>
  <div class="page">
    <Msg title="操作成功">
      <p>
        内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:"
          >文字链接</a
        >
      </p>
      <template #opr>
        <p class="weui-btn-area">
          <Button type="primary" @onClick="goBack">推荐操作</Button>
        </p>
      </template>
    </Msg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.history.go(-1)
    }

    return {
      goBack
    }
  }
})
</script>
