<template>
  <main class="mt-32">
    <h1 class="f-med">{{ t('home') }}</h1>
  </main>
</template>

<script setup>
import { usei18n } from 'vue-i18n'

const { t } = usei18n({useScope: 'global'}) 
</script>
