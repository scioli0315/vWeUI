<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { getStore } from './utils'

export default defineComponent({
  setup() {
    const dark = getStore('theme') === 'true'

    onMounted(() => {
      document.body.setAttribute('data-weui-theme', dark ? 'dark' : 'light')
    })
  }
})
</script>

<style lang="less">
@import './example.less';
</style>
