<template>
  <div class="flex justify-center items-center w-full h-16">
    <div class="flex justify-between w-5/6">
     <div class="flex gap-7">
      <RouterLink to="/" class="f-med">Home</RouterLink>
      <RouterLink to="/products" class="f-med">Products</RouterLink>
     </div>
     <div class="signs_container">
        <div class="flex gap-7" v-if="num === null">
            <RouterLink to="/login" class="f-med">Login</RouterLink>
        </div>
      <div class="flex gap-7" v-else>
        <p class="f-med cursor-pointer">{{ massage }}</p>
        <a href="#" class="f-med cursor-pointer" @click="localClear">Logout</a>
      </div> 
     </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'NavView',

    localClear() {
      localStorage.removeItem('id')
    },

    setup() {
        const massage = ref('')
        const num = localStorage.getItem('id')

        console.log(massage);

        onMounted( async() => {

            fetch('https://dummyjson.com/users/' + num)
            .then(res => res.json())
            .then(user => {
              let firstName = user.firstName
 
              massage.value = firstName
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
/* .container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(17, 34, 17, 0.10);
  position: fixed;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  height: 70px;
}
.userName {
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
}.userName:hover {
  cursor: pointer;
}
.name {
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  transition: .2s;

}.name:hover {
  cursor: pointer;
  color: rgb(9, 110, 0);
  transition: .2s;
}

.signs_container,
.nav_links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav_link {
  padding: 4px 0;
  font-size: 16px;
  
  color: black;
  text-decoration: none;
  font-family: 'Montserrat';
  font-weight: 600;
  border-bottom: 3px solid transparent;
  transition: 0.1s;
}.nav_link:hover {
  border-bottom: 3px solid #0eaa00;
  transition: 0.1s;
} */

</style>