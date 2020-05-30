<template>
  <Page desc="徽章" title="Badge">
    <div class="page__bd">
      <CellGroup title="新消息提示跟摘要信息后，统一在列表右侧">
        <Cell link>
          单行列表
          <template #ft>
            <span style="vertical-align: middle; font-size: 17px;">详细信息</span>
            <Badge dot />
          </template>
        </Cell>
      </CellGroup>

      <CellGroup title="未读数红点跟在主题信息后，统一在列表左侧">
        <Cell>
          <template #icon>
            <div style="position: relative; margin-right: 10px;">
              <img src="../images/pic_160.png" style="width: 50px; display: block;" />
              <Badge absolute text="8" />
            </div>
          </template>
          <p>联系人名称</p>
          <p style="font-size: 13px; color: #888;">摘要信息</p>
        </Cell>
        <Cell>
          <span>单行列表</span>
          <Badge text="8" />
        </Cell>
        <Cell>
          <span>单行列表</span>
          <Badge text="8" />
          <template #ft>
            <span style="vertical-align: middle; font-size: 17px;">详细信息</span>
            <Badge dot />
          </template>
        </Cell>
        <Cell>
          <span>单行列表</span>
          <Badge text="New" />
        </Cell>
      </CellGroup>
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
