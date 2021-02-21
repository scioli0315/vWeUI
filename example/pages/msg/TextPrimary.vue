<template>
  <div class="page">
    <Msg>
      <p>
        内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:"
          >文字链接</a
        >
      </p>
      <template #primary>
        <p>内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现</p>
      </template>

      <template #opr>
        <p class="weui-btn-area">
          <Button type="primary" @onClick="goBack">推荐操作</Button>
        </p>
      </template>
      <template #tips>
        <p>
          提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:"
            >文字链接</a
          >
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
      router.go(-1)
    }

    return {
      goBack
    }
  }
})
</script>
