<template>
  <NatificationView :natification="form.natifications"/>
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
import NatificationView from '../components/NatificationView.vue';
import { useAuthStore } from "../stores/auth";


export default {
  name: 'LoginView',
  components: {
    NatificationView
},
  data() {
    return {
      form: {
        username: 'kminchelle',
        password: '0lelplR',
        natifications: []
        
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
      }).catch(error => {
        const nat = this.form.natifications
        const time = Date.now().toLocaleString()

        if (error.response.status === 400) {
          setTimeout( function () {
            nat.splice(nat.length -1, 1)
          },3000)
          
          this.form.natifications.push({ error: 'Пользователь не найден', id: time })
        } else if (error.response.status === 401){
          setTimeout( function () {
            nat.splice(nat.length -1)
          },3000)
          this.form.natifications.unshift({ error: `Вы неправильно ввели имя пользователя или пароль`, icon: 'exclamation' })
        }
      })
    }
  }
}
</script>