<template>
  <header class="bg-white shadow-md w-full fixed">
    <NavView/>
  </header>

  <section class="flex justify-center w-full">
    <RouterView />
  </section>
</template>

<script setup>
import {  RouterView } from 'vue-router'
import NavView from './components/NavView.vue'
</script>
