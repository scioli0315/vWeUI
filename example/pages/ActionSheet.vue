<template>
  <Page desc="弹出式菜单" title="ActionSheet">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="iosShow = true">iOS ActionSheet</Button>
      <Button @onClick="androidShow = true">Android ActionSheet</Button>
    </div>

    <ActionSheet
      v-model:visible="iosShow"
      cancel-text="取消"
      :options="options"
      title="这是一个标题，可以为一行或者两行。"
      type="ios"
      @onCancel="onCancel"
      @onSelect="onSelect"
    />
    <ActionSheet
      v-model:visible="androidShow"
      :options="options"
      type="android"
      @onCancel="onCancel"
      @onSelect="onSelect"
    />
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { Toast } from '@/index'
import { ActionSheetValue } from '@/types/ActionSheet'

import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },
  setup() {
    const iosShow = ref(false)
    const androidShow = ref(false)
    const options = ref([
      { value: 0, label: '示例菜单', disabled: true },
      { value: 1, label: '示例菜单' },
      { value: 2, label: '示例菜单', warn: true }
    ])

    const onCancel = () => {
      console.log('取消')
    }

    const onSelect = (value: ActionSheetValue) => {
      console.log(value)
      Toast(value.label)
    }

    return {
      options,
      onCancel,
      onSelect,
      iosShow,
      androidShow
    }
  }
})
</script>
