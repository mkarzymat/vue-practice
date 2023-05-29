<template>
  <div class="flex flex-col-reverse gap-4 fixed right-3.5 top-56">
  <TransitionGroup
    name="list"
    class="natification_animate"
  >
      <div 
        v-for="natification in form.natifications"
        :key="natification"
        class="flex justify-between items-center px-6 py-4 gap-4 rounded-lg defaultShadow bg-red-500 text-white"
      >
        <div class="flex justify-center items-center w-12 h-12 rounded-full overflow-hidden" v-if="natification.icon === exclamation">
          <img class="w-9/12" src="../../public/icons/!2.png" alt="">
        </div>
        <div class="w-40">
          <p class="f-med">{{ natification.error }}</p>
        </div>
      </div>
  </TransitionGroup>
        
    </div>
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
        password: '0lelplR',
        natifications: [],
        
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

<style scoped>

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.list-enter-active {
  transition: all .3s;
}
.list-leave-to {
  transform: translateX(280px);
  transition: all 1s;
  opacity: 0;
}
.list-move,
.list-move-to {
  transition: all .3s;
}
</style>