<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <input type="text" v-model="form.username">
      </div>
      <div>
        <input type="password" v-model="form.password">
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from '../api/axios'
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: 'kminchelle',
        password: '0lelplR',
      }
    }
  },
  methods: {
    submit() {
      console.log('auth')
      axios.post('/auth/login', this.form).then(({data}) => {
        localStorage.setItem('token', data.token)
        console.log(data)
      })
    }
  }
}
</script>