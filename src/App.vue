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

<!-- <style>

.header {
  width: 100%;
}

.section {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 180px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style> -->
