<template>
  <div>
    <navbar v-if="route.meta.title" :title="route.meta.title" />
    <block>
      <slot />
    </block>
    <tabbar />
  </div>
</template>

<script setup>
  const route = useRoute()
</script>

<script>
  import { Locale } from 'vant'
  import frFR from 'vant/es/locale/lang/fr-FR'
  Locale.use('fr-FR', frFR)
</script>

<style>
  body {
    background-color: #f5f6f7;
  }
</style>
