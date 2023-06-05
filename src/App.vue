<template>
  <header class="bg-white shadow-md w-full fixed">
    <NavView/>
  </header>
  <NatificationView :natification="natification"/>

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
import NatificationView from './components/NatificationView.vue';


export default {
  name: 'AppView',
  components: {
          NavView,
          NatificationView
  },
  data() {
    return {
      natification: []
    }
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


    <!-- error() {
      axios.interceptors.response.use(({data}) => {
      return data
      },error => {
      if (error.response.status === 401) {
          console.log('401');
          this.$router.push({name: 'login'})
      } else if (error.response.status === 403) {
          console.log('403');
          this.$router.push({ name: "login" });
      } else if (error.response.status === 400) {
          console.log('400');
      }
      return Promise.reject(error);
      })
    } -->
