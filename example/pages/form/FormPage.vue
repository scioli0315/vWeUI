<template>
  <div class="page">
    <Form title="表单结构">
      <template #desc>
        展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。
      </template>

      <CellGroup title="表单组标题">
        <VInput label="微信号" placeholder="填写本人微信号" />
        <VInput label="昵称" placeholder="填写本人微信号的昵称" />
        <VInput label="联系电话" placeholder="填写绑定的电话号码" type="number" />
      </CellGroup>

      <template #oprTips> 表单页提示，居中对齐 </template>

      <template #opr>
        <Button disabled type="primary">确定</Button>
      </template>

      <template #extraTips> 表单页提示，居中对齐 </template>

      <template #extra>
        <Footer>
          <template #links>
            <FooterLink>底部链接</FooterLink>
          </template>
          Copyright &copy; 2008-2016 weui.io
        </Footer>
      </template>
    </Form>
  </div>
</template>
