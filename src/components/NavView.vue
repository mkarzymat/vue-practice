<template>
  <div class="flex justify-center items-center w-full h-16">
    <div class="flex justify-between w-5/6">
     <div class="flex items-center gap-7">
      <RouterLink to="/" class="f-med">{{ $t('nav.home') }}</RouterLink>
      <RouterLink to="/products" class="f-med">{{ $t('nav.products') }}</RouterLink>
     </div>
     <div class="flex items-center gap-7">
      <div class="flex items-center gap-3">
        <p class="f-med">
          {{  }}
        </p>
        <CartView :click="clickCart"/>
        <!-- <button class="btn" @click="quantityProducts"></button> -->
      </div>
     <div class="">
      <select class="f-med select " v-model="$i18n.locale">
        <option class="f-med option" value="en">English
        </option>
        <option class="f-med option"  value="ru">Русский 
        </option>
      </select>
     </div>
      <div v-if="!useAuthStore().getUser" class="flex gap-7" >
          <RouterLink to="/login" class="f-med">{{ $t('login.btn') }}</RouterLink>
      </div>
      <div v-else class="flex gap-7" >
        <p class="f-med cursor-pointer">{{ useAuthStore().getUser.firstName }}</p>
        <a href="#" class="f-med cursor-pointer" @click="logout">{{ $t('nav.logout') }}</a>
      </div> 
     </div>
    </div>
  </div>
</template>

<script>
import {useAuthStore} from "../stores/auth";
import {useProductStore} from "../stores/product";
import CartView from "./CartView.vue";

export default {
    name: 'NavView',
    props: [
      'quantityProdProps'
    ],
    components: {
      CartView
    },
    created() {
    },
    data() {
      const data = useProductStore().getData
      // const dataLength = data.length
      return {
        data,
        // dataLength
      }
    },
    methods: {
      useAuthStore,
      logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        useAuthStore().setUser(null)

        this.$router.push({ name: "login" })
      },
      clickCart() { 
        this.$router.push({ name: "cartPages" })
      }
    },

}
</script>