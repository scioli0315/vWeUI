<template>
  <Page desc="页脚" title="Footer">
    <div class="page__bd page__bd_spacing">
      <Footer>Copyright &copy; 2008-2016 weui.io</Footer>
      <br />
      <br />
      <Footer>
        <template #links>
          <FooterLink>底部链接</FooterLink>
        </template>
        Copyright &copy; 2008-2016 weui.io
      </Footer>
      <br />
      <br />
      <Footer>
        <template #links>
          <FooterLink>底部链接</FooterLink>
          <FooterLink>底部链接</FooterLink>
        </template>
        Copyright &copy; 2008-2016 weui.io
      </Footer>

      <Footer class="weui-footer_fixed-bottom">
        <template #links>
          <FooterLink @click="goHome">WeUI首页</FooterLink>
        </template>
        Copyright &copy; 2008-2016 weui.io
      </Footer>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const router = useRouter()
    const goHome = () => {
      router.push('/home')
    }

    return {
      goHome
    }
  }
})
</script>
