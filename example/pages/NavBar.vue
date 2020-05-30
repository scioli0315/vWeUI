<template>
  <Page>
    <div class="page__bd">
      <NavBar v-model="selected" @onChange="onChnage">
        <NavBarItem name="label1" title="选项一" />
        <NavBarItem name="label2" title="选项二" />
        <NavBarItem name="label3" title="选项三" />
      </NavBar>
      <div class="weui-tab__panel">{{ content }}</div>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const selected = ref('label1')
    const content = ref('label1')

    const onChnage = (v: string) => {
      content.value = v
    }

    return {
      content,
      selected,
      onChnage
    }
  }
})
</script>
