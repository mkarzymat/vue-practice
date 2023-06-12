<template>
  <div>
    <form @submit.prevent="submit" class="flex flex-col gap-5 rounded-lg defaultShadow p-5 w-80 h-72 mt-60">
      <h2 class="f-sBold text-xl my-3">{{ $t('login.login') }}</h2>
      <input v-model="form.username" type="text" class="f-med py-2 px-3" :placeholder="$t('login.email')">
      <input v-model="form.password" type="password" class="f-med py-2 px-3" :placeholder="$t('login.password')">
      <button class="btn" type="submit">{{ $t('login.btn') }}</button>
    </form>
  </div>
</template>

<script>
import axios from '../api/axios'
import { useAuthStore } from "../stores/auth";


export default {
  name: 'LoginView',
  components: {
},
  data() {
    return {
      form: {
        username: 'kminchelle',
        password: '0lelplR'
        
      },
    }
  },
  methods: {
    submit() {
      axios.post('/auth/login', this.form)
      .then(data => {
        console.log(data)

        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.id)
        useAuthStore().setUser(data)
        
        this.$router.push({ name: "products" });
      })
      .catch(error => {
        if (error.response.status === 400) {
          this.$notify({
            text: 'Пользователь не найден !'
          });
        } else if (error.response.status === 401){
          this.$notify({
            text: 'Пользователь не найден !'
          });
        }
      })
    }
  }
}
</script>