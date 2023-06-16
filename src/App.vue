<script setup lang="ts">
import AppHeader from '@/components/AppHeader/index.vue'
import AppFooter from '@/components/AppFooter/index.vue'
</script>

<template>
  <AppHeader/>
  <RouterView />
  <AppFooter v-if="$route.meta.parts && $route.meta.parts.includes('footer')"/>
</template>

<style scoped lang="scss">

</style>
