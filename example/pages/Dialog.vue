<template>
  <Page desc="对话框" title="Dialog">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="iosDialog1 = true">iOS Dialog样式一</Button>
      <Button @onClick="iosDialog2 = true">iOS Dialog样式二</Button>
      <Button @onClick="androidDialog1 = true">Android Dialog样式一</Button>
      <Button @onClick="androidDialog2 = true">Android Dialog样式二</Button>
    </div>

    <!--BEGIN dialog1-->
    <Dialog
      cancel-text="辅助操作"
      confirm-text="主操作"
      title="弹窗标题"
      :visible="iosDialog1"
      @onCancel="iosDialog1 = false"
      @onConfirm="iosDialog1 = false"
    >
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </Dialog>
    <!--END dialog1-->
    <!--BEGIN dialog2-->
    <Dialog
      confirm-text="知道了"
      :show-cancel="false"
      :visible="iosDialog2"
      @onConfirm="iosDialog2 = false"
    >
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </Dialog>
    <!--END dialog2-->
    <!--BEGIN dialog3-->
    <Dialog
      cancel-text="辅助操作"
      confirm-text="主操作"
      title="弹窗标题"
      type="android"
      :visible="androidDialog1"
      @onCancel="androidDialog1 = false"
      @onConfirm="androidDialog1 = false"
    >
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </Dialog>
    <!--END dialog3-->
    <!--BEGIN dialog4-->
    <Dialog
      confirm-text="知道了"
      :show-cancel="false"
      type="android"
      :visible="androidDialog2"
      @onConfirm="androidDialog2 = false"
    >
      弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
    </Dialog>
    <!--END dialog4-->
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
    const iosDialog1 = ref(false)
    const iosDialog2 = ref(false)
    const androidDialog1 = ref(false)
    const androidDialog2 = ref(false)

    return {
      iosDialog1,
      iosDialog2,
      androidDialog1,
      androidDialog2
    }
  }
})
</script>
