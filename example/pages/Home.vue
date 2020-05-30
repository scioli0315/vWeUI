<template>
  <Page>
    <div class="page__hd">
      <h1 class="page__title">
        <img alt="WeUI" height="21" src="../images/logo.png" />
      </h1>
      <p class="page__desc">
        WeUI
        是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。
      </p>
    </div>
    <div class="page__bd page__bd_spacing">
      <ul>
        <li>
          <CellGroup>
            <Switch v-model="dark" label="黑暗模式" />
          </CellGroup>
        </li>
        <li :class="{ js_show: show === 'form' }">
          <Flex @click="handerCategory('form')">
            <p class="weui-flex__item">表单</p>
            <img alt src="../images/icon_nav_form.png" />
          </Flex>
          <div class="page__category">
            <CellGroup class="page__category-content">
              <Cell access @click="go('/button')">Button</Cell>
              <Cell access @click="go('/form')"> Form</Cell>
              <Cell access @click="go('/list')">List</Cell>
              <Cell access @click="go('/slider')"> Slider</Cell>
              <Cell access @click="go('/uploader')">Uploader</Cell>
            </CellGroup>
          </div>
        </li>
        <li :class="{ js_show: show === 'layout' }">
          <Flex @click="handerCategory('layout')">
            <p class="weui-flex__item">基础组件</p>
            <img alt src="../images/icon_nav_layout.png" />
          </Flex>
          <div class="page__category">
            <CellGroup class="page__category-content">
              <Cell access @click="go('/article')">Article</Cell>
              <Cell access @click="go('/badge')">Badge</Cell>
              <Cell access @click="go('/flex')">Flex</Cell>
              <Cell access @click="go('/footer')">Footer</Cell>
              <Cell access @click="go('/gallery')">Gallery</Cell>
              <Cell access @click="go('/grid')">Grid</Cell>
              <Cell access @click="go('/icons')">Icons</Cell>
              <Cell access @click="go('/loadmore')">Loadmore</Cell>
              <Cell access @click="go('/panel')">Panel</Cell>
              <Cell access @click="go('/preview')">Preview</Cell>
              <Cell access @click="go('/progress')">Progress</Cell>
            </CellGroup>
          </div>
        </li>
        <li :class="{ js_show: show === 'feedback' }">
          <Flex @click="handerCategory('feedback')">
            <p class="weui-flex__item">操作反馈</p>
            <img alt src="../images/icon_nav_feedback.png" />
          </Flex>
          <div class="page__category">
            <CellGroup class="page__category-content">
              <Cell access @click="go('/actionsheet')">Actionsheet</Cell>
              <Cell access @click="go('/dialog')"> Dialog</Cell>
              <Cell access @click="go('/half-screen-dialog')">Half-screen Dialog</Cell>
              <Cell access @click="go('/msg')">Msg</Cell>
              <Cell access @click="go('/picker')">Picker</Cell>
              <Cell access @click="go('/toast')">Toast</Cell>
              <Cell access @click="go('/top-tips')">TopTips</Cell>
            </CellGroup>
          </div>
        </li>
        <li :class="{ js_show: show === 'nav' }">
          <Flex @click="handerCategory('nav')">
            <p class="weui-flex__item">导航相关</p>
            <img alt src="../images/icon_nav_nav.png" />
          </Flex>
          <div class="page__category">
            <CellGroup class="page__category-content">
              <Cell access @click="go('/navbar')">Navbar</Cell>
              <Cell access @click="go('/tabbar')">Tabbar</Cell>
            </CellGroup>
          </div>
        </li>
        <li :class="{ js_show: show === 'search' }">
          <Flex @click="handerCategory('search')">
            <p class="weui-flex__item">搜索相关</p>
            <img alt src="../images/icon_nav_search.png" />
          </Flex>
          <div class="page__category">
            <CellGroup class="page__category-content">
              <Cell access @click="go('/searchbar')">Search Bar</Cell>
            </CellGroup>
          </div>
        </li>
        <!-- <li>
          <Flex>
            <p class="weui-flex__item">层级规范</p>
            <img alt src="../images/icon_nav_z-index.png" />
          </Flex>
        </li> -->
      </ul>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import { getStore, setStore } from '../utils'
import Page from './common/Page.vue'

export default defineComponent({
  components: {
    Page
  },

  setup() {
    const router = useRouter()
    const show = ref(getStore('category') || 'form')
    const dark = ref(getStore('theme') === 'true')

    const handerCategory = (type: string) => {
      setStore('category', type)
      show.value = type
    }
    const go = (access: string) => {
      router.push(access)
    }

    watch(dark, () => {
      setStore('theme', dark.value)
      document.body.setAttribute('data-weui-theme', dark.value ? 'dark' : 'light')
    })

    return {
      show,
      handerCategory,
      go,
      dark
    }
  }
})
</script>
