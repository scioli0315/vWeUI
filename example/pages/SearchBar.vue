<template>
  <Page desc="搜索栏" title="SearchBar">
    <div class="page__bd">
      <SearchBar
        v-model="text"
        cancel-text="取消"
        placeholder="搜索"
        @onCancel="onCancel"
        @onChange="onChange"
        @onClear="onClear"
        @onSearch="onSearch"
      />

      <div v-show="text.length > 0">
        <CellGroup class="searchbar-result">
          <Cell access>实时搜索文本</Cell>
          <Cell access>实时搜索文本</Cell>
          <Cell access>实时搜索文本</Cell>
          <Cell access>实时搜索文本</Cell>
        </CellGroup>
      </div>
    </div>
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
    const text = ref('')

    const onSearch = () => {
      instanceProxy.$toast(text.value)
    }

    const onChange = (val: string) => {
      console.log(val)
    }

    const onCancel = () => {
      console.log('onCancel')
    }

    const onClear = () => {
      console.log('onClear')
    }

    return {
      text,
      onSearch,
      onChange,
      onCancel,
      onClear
    }
  },

  mounted() {
    instanceProxy = this
  }
})
</script>
