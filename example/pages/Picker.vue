<template>
  <Page desc="多列选择器" title="Picker">
    <div class="page__bd page__bd_spacing">
      <Button @onClick="showPicker.one = true">单列选择器</Button>
      <Button @onClick="showPicker.multi = true">多列选择器</Button>
    </div>

    <Picker
      v-model:visible="showPicker.one"
      confirm="确定"
      :options="one"
      title="单列选择器"
      @onCancel="onClick('cancel')"
      @onChange="onConfirm"
      @onConfirm="onConfirm"
    />

    <Picker
      v-model:visible="showPicker.multi"
      confirm="确定"
      :default-value="['3', 'A']"
      :options="multi"
      title="多列选择器"
      @onCancel="onClick('cancel')"
      @onChange="onConfirm"
      @onConfirm="onConfirm"
    />
  </Page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import Page from './common/Page.vue'

const one = [
  [
    {
      label: '飞机票',
      value: 0
    },
    {
      label: '火车票',
      value: 1
    },
    {
      label: '的士票',
      value: 2
    },
    {
      label: '公交票 (disabled)',
      disabled: true,
      value: 3
    },
    {
      label: '其他',
      value: 4
    }
  ]
]

const multi = [
  [
    {
      label: '1',
      value: '1'
    },
    {
      label: '2',
      value: '2'
    },
    {
      label: '3',
      value: '3'
    }
  ],
  [
    {
      label: 'A',
      value: 'A'
    },
    {
      label: 'B',
      value: 'B'
    },
    {
      label: 'C',
      value: 'C'
    }
  ]
]

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const showPicker = reactive({
      one: false,
      multi: false,
      date: false
    })

    const onConfirm = (value: unknown) => {
      console.log(value)
    }
    const onClick = (msg: string) => {
      console.log(msg)
    }

    return {
      showPicker,
      onConfirm,
      one,
      multi,
      onClick
    }
  }
})
</script>
