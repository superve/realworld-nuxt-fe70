<template>
  <div>
    <!-- 头部 -->
    <app-header />

    <!-- 页面 -->
    <nuxt/>

    <!-- 底部 -->
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

