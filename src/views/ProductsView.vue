<template>
  <div>Products</div>
</template>
<script>
import axios from '../api/axios'
export default {
  name: 'ProductsView',
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      axios.get('/auth/products').then(({data}) => {
        console.log(data)
      })
    }
  }
}
</script>