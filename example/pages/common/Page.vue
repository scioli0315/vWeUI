<template>
  <div :class="'page ' + cla">
    <div v-show="props.title && props.desc" class="page__hd">
      <h1 class="page__title">{{ props.title }}</h1>
      <p class="page__desc">{{ props.desc }}</p>
    </div>
    <slot />
    <div class="page__ft">
      <span @click="go('/home')"><img src="../../images/icon_footer_link.png" /></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  props: {
    desc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const path = route.path.split('/')
    const cla = ref(path[1] || 'home')

    const go = (link: string) => {
      router.push(link)
    }

    return {
      cla,
      props,
      go
    }
  }
})
</script>
