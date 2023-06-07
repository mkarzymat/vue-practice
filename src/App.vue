<template>
  <div>
    <header class="bg-white shadow-md w-full fixed">
      <NavView/>
    </header>

    <section class="flex justify-center w-full">
      <RouterView />
    </section>
    <notifications classes="notificationClass"></notifications>
  </div>
</template>

<script>
import {  RouterView } from 'vue-router'
import NavView from './components/NavView.vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from "./stores/auth";
import axios from "./api/axios";


export default {
  name: 'AppView',
  components: {
          NavView,
  },
  props: [
    'status'
  ],
  data() {
     const resStatus = this.status
    return {
      resStatus
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


<style>
.notificationClass {
  font-family: 'Montserrat';
  font-weight: 600;
  padding: 14px 18px;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 1px solid #0eaa00;
}

.errorNatification {
  font-family: 'Montserrat';
  font-weight: 600;
  padding: 14px 18px;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 1px solid #aa0000;
}

.vue-notification-group {
  margin-top: 8%;
  margin-right: 1%;
}
</style>