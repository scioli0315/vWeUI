<template>
  <div class="page">
    <Form title="模拟选择框">
      <CellGroup>
        <DatePicker
          v-model="form.date"
          day="日"
          label="日期"
          label-width="3em"
          month="月"
          year="年"
        />

        <VInput v-model="form.phone" label-width="3em">
          <template #hd>
            <Select v-model="form.area" :options="areas" title="区号" />
          </template>
        </VInput>

        <Select
          v-model="form.ticket"
          label="票种"
          label-width="3em"
          :options="tickets"
          placeholder="请选择票种"
          title="票种"
        />
      </CellGroup>

      <template #desc> 用于丰富原生选择框结构，使其更具有扩展性 </template>
      <template #opr>
        <Button type="primary" @onClick="showValue">确定</Button>
      </template>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

const areas = [
  [
    {
      label: '+86',
      value: 0
    },
    {
      label: '+80',
      value: 1
    },
    {
      label: '+84',
      value: 2
    },
    {
      label: '+87',
      value: 3
    }
  ]
]

const tickets = [
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
  ],
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

export default defineComponent({
  setup() {
    const form = reactive({
      date: [],
      area: [0],
      phone: '12345678907',
      ticket: []
    })

    const showValue = () => {
      console.log(form)
    }

    const onClick = (msg: string) => {
      console.log(msg)
    }

    return {
      form,
      areas,
      tickets,
      showValue,
      onClick
    }
  }
})
</script>
