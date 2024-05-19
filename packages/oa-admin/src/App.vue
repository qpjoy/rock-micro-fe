<template>
  <MainLayout></MainLayout>

  子站点：
  <div id="sub-app"></div>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';

defineOptions({
  name: 'App',
});
</script>
