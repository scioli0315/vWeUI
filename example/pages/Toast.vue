<template>
  <Page desc="弹出式提示" title="Toast">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="toast1()">文字提示</Button>
      <Button @onClick="toast2()">成功提示</Button>
      <Button @onClick="toast3()">失败提示</Button>
      <Button @onClick="onLoading">加载中提示</Button>
    </div>
    <Loading message="数据加载中" :visible="loading" />
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Page from './common/Page.vue'

let instanceProxy: any

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const loading = ref(false)

    const toast1 = () => {
      instanceProxy.$toast({ type: 'text', message: '文字提示' })
    }

    const toast2 = () => {
      instanceProxy.$toast({ type: 'success', message: '成功提示' })
    }

    const toast3 = () => {
      instanceProxy.$toast({ type: 'fail', message: '失败提示' })
    }

    const onLoading = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 3000)
    }

    return {
      toast1,
      toast2,
      toast3,
      onLoading,
      loading
    }
  },

  mounted() {
    instanceProxy = this
  }
})
</script>
