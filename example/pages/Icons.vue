<template>
  <Page desc="图标" title="Icons">
    <div class="page__bd page__bd_spacing">
      <div class="icon-box">
        <Icon type="success" />
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">成功</h3>
          <p class="icon-box__desc">用于表示操作顺利达成</p>
        </div>
      </div>
      <div class="icon-box">
        <Icon type="info" />
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">提示</h3>
          <p class="icon-box__desc">
            用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息
          </p>
        </div>
      </div>
      <div class="icon-box">
        <Icon type="warn-primary" />
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">普通警告</h3>
          <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
        </div>
      </div>
      <div class="icon-box">
        <Icon type="warn" />
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">强烈警告</h3>
          <p class="icon-box__desc">用于表示操作后将引起严重的不可挽回的后果的情况</p>
        </div>
      </div>
      <div class="icon-box">
        <Icon type="waiting" />
        <div class="icon-box__ctn">
          <h3 class="icon-box__title">等待</h3>
          <p class="icon-box__desc">用于表示等待</p>
        </div>
      </div>

      <div class="icon_sp_area">
        <template v-for="v in icons"><Icon :key="v" size="24" :type="v" /></template>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Page from './common/Page.vue'

const icons = [
  'circle',
  'success',
  'success-circle',
  'success-no-circle',
  'success-no-circle-thin',
  'warn',
  'warn-primary',
  'info',
  'info-circle',
  'waiting',
  'waiting-circle',
  'download',
  'search',
  'cancel',
  'clear',
  'arrow-bold',
  'arrow',
  'close',
  'close-thin',
  'back-arrow',
  'back-arrow-thin',
  'back',
  'back-circle'
]

export default defineComponent({
  components: {
    Page
  },

  setup() {
    return {
      icons
    }
  }
})
</script>
