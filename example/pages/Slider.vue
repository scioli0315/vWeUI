<template>
  <Page desc="滑块" title="Slider">
    <div class="page__bd page__bd_spacing">
      <Slider v-model="value1" />
      <br />
      <Slider v-model="value2" show-value />
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
    const value1 = ref(0)
    const value2 = ref(50)

    const onDelete = () => {
      console.log('delete')
    }

    return {
      value1,
      value2,
      onDelete
    }
  }
})
</script>
