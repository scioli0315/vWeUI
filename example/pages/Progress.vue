<template>
  <Page desc="进度条" title="Progress">
    <div class="page__bd page__bd_spacing">
      <Progress :value="one"><i class="weui-icon-cancel"></i></Progress>
      <br />
      <Progress :value="two"><i class="weui-icon-cancel"></i></Progress>
      <br />
      <Progress :value="three"><i class="weui-icon-cancel"></i></Progress>

      <div class="weui-btn-area">
        <Button
          :disabled="progress >= 100"
          :loading="progress > 0 && progress < 100"
          type="primary"
          @onClick="next"
          >上传</Button
        >
      </div>
    </div>
  </Page>
</template>

<script>
import { defineComponent, ref } from 'vue'

import Page from './common/Page'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const one = ref(0)
    const two = ref(50)
    const three = ref(80)
    const progress = ref(0)

    const next = () => {
      if (progress.value > 100) {
        progress.value = 100
        return
      }
      progress.value += 2
      one.value = two.value = three.value = progress.value
      setTimeout(next, 20)
    }

    return {
      one,
      two,
      three,
      progress,
      next
    }
  }
})
</script>
