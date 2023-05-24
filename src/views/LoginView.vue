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
  data() {
    return {
      form: {
        username: 'kminchelle',
        password: '0lelplR',
      },
    }
  },
  methods: {
    submit() {
      axios.post('/auth/login', this.form)
      .then(data => {
        console.log(data)

        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.id)
        useAuthStore().setUser(data)
        
        this.$router.push({ name: "products" });
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>


<!-- <style scoped>
.form {
display: flex;
flex-direction: column;
gap: 20px;
width: 200px;
height: 230px;
border: 1px solid grey;
background-color: #fff;
border-radius: 10px;
padding: 20px;
margin-top: 12%;
}

.title {
margin: 10px;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
}

.inputs {
padding: 7px 10px;
border-radius: 5px;
border: 1px solid grey;
}

.signin_btn {
padding: 10px 20px;
border-radius: 5px;
border: 1px solid grey;
}
</style> -->