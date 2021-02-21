<template>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell weui-cell_uploader">
      <div class="weui-cell__bd">
        <div class="weui-uploader">
          <div class="weui-uploader__hd">
            <p class="weui-uploader__title">{{ props.title }}</p>
            <div class="weui-uploader__info">{{ props.files.length }}/{{ props.max }}</div>
          </div>
          <div class="weui-uploader__bd">
            <ul class="weui-uploader__files">
              <Item
                v-for="(v, index) in props.files"
                :key="index"
                :file="v"
                :index="index"
                @showItem="showItem"
              />
            </ul>
            <div v-if="props.files.length < props.max" class="weui-uploader__input-box">
              <input
                :accept="props.accept"
                class="weui-uploader__input"
                :multiple="props.multiple"
                type="file"
                @change="onChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Gallery
      v-model:visible="gallery.visible"
      show-delete
      :src="gallery.src"
      @onDelete="onDelete"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { stopPropagation } from '../../utils'
import Gallery from '../Gallery'
import Item from './Item'

export default defineComponent({
  name: 'Uploader',

  components: { Gallery, Item },

  emits: ['onChange'],

  props: {
    accept: {
      type: String,
      default: 'image/*'
    },
    multiple: {
      type: Boolean,
      default: true
    },
    files: {
      type: Array,
      required: true
    },
    max: {
      type: Number,
      default: 6
    },
    title: {
      type: String,
      default: '图片上传'
    },
    ['onUpdate:files']: {
      type: Function,
      default: null
    }
  },

  setup(props, { emit }) {
    const gallery: { visible: boolean; src: string } = reactive({
      visible: false,
      src: ''
    })
    const index = ref(-1)

    const showItem = ({ src, key }: { src: string; key: number }) => {
      gallery.src = src
      gallery.visible = true
      index.value = key
    }

    const onChange = (event: any) => {
      stopPropagation(event)
      const files = event.target.files
      emit('onChange', Array.prototype.slice.call(files, 0, props.max - props.files.length))
    }

    const onDelete = () => {
      if (props['onUpdate:files']) {
        const files = props.files
        files.splice(index.value, 1)
        props['onUpdate:files'](files)
        gallery.visible = false
      }
    }

    return {
      props,
      gallery,
      showItem,
      onChange,
      onDelete
    }
  }
})
</script>

<style lang="less">
@import '../../../weui/base.less';
@import '../../../weui/widget/weui-cell/weui-cell_global.less';
@import '../../../weui/widget/weui-cell/weui-form.less';
@import '../../../weui/widget/weui-cell/weui-uploader.less';
</style>
