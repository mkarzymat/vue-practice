<template>
  <main class="mt-32">
    <h1 class="f-med">{{ t("title") }}</h1>
  </main>
</template>

<script setup>
import {useI18n} from 'vue-i18n'

const { t } = useI18n({useScope: 'global'}) 
</script>
