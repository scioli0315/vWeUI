<template>
  <Page desc="加载更多" title="Loadmore">
    <div class="page__bd">
      <LoadMore />

      <LoadMore message="正在加载" />

      <Divider message="暂无数据" />

      <Divider />
    </div>
  </Page>
</template>

<script lang="ts">
import Page from './common/Page.vue'

export default {
  components: {
    Page
  }
}
</script>
