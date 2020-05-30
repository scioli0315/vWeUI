<template>
  <Page desc="按钮" title="Button">
    <div class="page__bd">
      <div class="button-sp-area">
        <Button type="primary">页面主操作</Button>
        <Button loading type="primary">页面主操作</Button>
        <Button disabled type="primary">页面主操作</Button>
        <Button>页面次要操作</Button>
        <Button loading>页面次操作</Button>
        <Button disabled>页面次要操作</Button>
        <Button type="warn">警告类操作</Button>
        <Button loading type="warn">警告类操作</Button>
        <Button disabled type="warn">警告类操作</Button>
      </div>

      <div class="button-sp-area cell">
        <Button cell>普通行按钮</Button>
        <Button cell type="primary">强调行按钮</Button>
        <Button cell type="primary">
          <img
            class="weui-btn_cell__icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
          />
          强调行按钮
        </Button>
        <Button cell type="warn">警告行按钮</Button>
      </div>

      <div class="button-sp-area">
        <Button mini type="primary">按钮</Button>
        <Button mini>按钮</Button>
        <Button mini type="warn">按钮</Button>
      </div>
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
