<template>
  <Page>
    <div class="page__bd">
      <div class="weui-tab__panel"></div>
      <Tabbar>
        <TabbarItem badge badge-text="8" :on="on === 0" @click="on = 0">
          <template #icon>
            <img alt="" src="../images/icon_tabbar.png" />
          </template>
          微信
        </TabbarItem>
        <TabbarItem :on="on === 1" @click="on = 1">
          <template #icon>
            <img alt="" src="../images/icon_tabbar.png" />
          </template>
          通讯录
        </TabbarItem>
        <TabbarItem badge :on="on === 2" @click="on = 2">
          <template #icon>
            <img alt="" src="../images/icon_tabbar.png" />
          </template>
          发现
        </TabbarItem>
        <TabbarItem :on="on === 3" @click="on = 3">
          <template #icon>
            <img alt="" src="../images/icon_tabbar.png" />
          </template>
          我
        </TabbarItem>
      </Tabbar>
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
    const on = ref(0)

    return {
      on
    }
  }
})
</script>
