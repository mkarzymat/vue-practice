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
import {useAuthStore} from "./stores/auth";
import axios from "./api/axios";

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
  },
  created() {
    this.initAuthUser()
  },
  methods: {
    initAuthUser() {
      if(!localStorage.getItem('token')) {
        this.$router.push({name: 'login'})
      } else if (!useAuthStore().getUser && localStorage.getItem('userId')) {
        axios.get(`/auth/users/${localStorage.getItem('userId')}`)
            .then(data => {
              useAuthStore().setUser(data)
            })
      }
    }
  }
}
</script>
