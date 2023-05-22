<template>
  <div class="flex justify-center items-center w-full h-16">
    <div class="flex justify-between w-5/6">
     <div class="flex items-center gap-7">
      <RouterLink to="/" class="f-med">{{ $t('nav.home') }}</RouterLink>
      <RouterLink to="/products" class="f-med">{{ $t('nav.products') }}</RouterLink>
     </div>
     <div class="flex items-center gap-7">
     <div class="">
      <select class="f-med select " v-model="$i18n.locale">
        <option class="f-med option" value="en">English
        </option>
        <option class="f-med option"  value="ru">Русский 
        </option>
      </select>
     </div>
        <div class="flex gap-7" >
            <RouterLink to="/login" class="f-med">{{ $t('login.btn') }}</RouterLink>
        </div>
      <div class="flex gap-7" >
        <!-- <p class="f-med cursor-pointer">{{ massage }}</p> -->
        <p class="f-med cursor-pointer">{{ store.data.firstName }}</p>
        <a href="#" class="f-med cursor-pointer" @click="clear">{{ $t('nav.logout') }}</a>
      </div> 
     </div>
    </div>
  </div>
</template>

<script>
import { store } from '../stores/store';

export default {
    name: 'NavView',

    data() {
      // const num = localStorage.getItem('id')
      return {
        store
        // num
      }
    },

    methods: {
      clear() {
        localStorage.clear()
      }
    },

}
</script>

<style scoped>
</style>