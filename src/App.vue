<template>
  <header class="bg-white shadow-md w-full fixed">
    <NavView/>
  </header>

  <section class="flex justify-center w-full">
    <RouterView />
  </section>
</template>

<script>
import {  RouterView } from 'vue-router'
import NavView from './components/NavView.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppView',
  components: {
          NavView
  },
  setup() {
      const { t } = useI18n({ useScope: "global" });
      
      return {
          t,
          RouterView
      };
  }
}
</script>
