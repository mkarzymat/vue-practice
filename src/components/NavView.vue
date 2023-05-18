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
        <div class="flex gap-7" v-if="num === null">
            <RouterLink to="/login" class="f-med">{{ $t('login.btn') }}</RouterLink>
        </div>
      <div class="flex gap-7" v-else>
        <p class="f-med cursor-pointer">{{ massage }}</p>
        <a href="#" class="f-med cursor-pointer" @click="clear">{{ $t('nav.logout') }}</a>
      </div> 
     </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'NavView',

    data() {
      return {
        showVisable: false
      }
    },

    methods: {
      clear() {
        localStorage.clear()
      }
    },

    setup() {
        const massage = ref('')
        const num = localStorage.getItem('id')

        onMounted( async() => {

            fetch('https://dummyjson.com/users/' + num)
            .then(res => res.json())
            .then(user => {
              let firstName = user.firstName
 
              massage.value = firstName

              console.log(firstName);
            })
        })

        return {
            massage,
            num
            
        }
    },

    setup2() {
      const num = localStorage.getItem('id')
      const token = localStorage.getItem('token')

      return {
        num,
        token
      }
    },
}
</script>

<style scoped>
</style>