<template>
  <div class="products mt-32">
    <div class="mb-10">
      <h2 class="f-sBold text-2xl">{{ $t('products.tehno') }}</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in teh" 
        :key="res.teh" 
        :img="res.images[1]"
        :title="res.title"
        :price="res.price"
        :category="res.category"
        :description="res.description"
        :discount="res.discountPercentage"
        :stock="res.stock"
      />
    </div>

    <div class="mt-14 mb-10">
      <h2 class="f-sBold text-2xl">{{ $t('products.perfume') }}</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in perfume" 
        :key="res.perfume" 
        :img="res.images[1]"
        :title="res.title"
        :price="res.price"
        :category="res.category"
        :description="res.description"
        :discount="res.discountPercentage"
        :stock="res.stock"
      />
    </div>

    <div class="mt-14 mb-10">
      <h2 class="f-sBold text-2xl">{{ $t('products.skincare') }}</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in skincare" 
        :key="res.skincare" 
        :img="res.images[1]"
        :title="res.title"
        :price="res.price"
        :category="res.category"
        :description="res.description"
        :discount="res.discountPercentage"
        :stock="res.stock"
      />
    </div>

    <div class="mt-14 mb-10">
      <h2 class="f-sBold text-2xl">{{ $t('products.groceries') }}</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in groceries" 
        :key="res.groceries" 
        :img="res.images[1]"
        :title="res.title"
        :price="res.price"
        :category="res.category"
        :description="res.description"
        :discount="res.discountPercentage"
        :stock="res.stock"
      />
    </div>

    <div class="mt-14 mb-10">
      <h2 class="f-sBold text-2xl">{{ $t('products.decorative') }}</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in decorative" 
        :key="res.decorative" 
        :img="res.images[1]"
        :title="res.title"
        :price="res.price"
        :category="res.category"
        :description="res.description"
        :discount="res.discountPercentage"
        :stock="res.stock"
      />
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
import CardView from '../components/CardView.vue'

export default {
    name: "ProductsView",
    components: { 
      CardView
    },
    created() {
        this.fetchProducts();
    },
    data() {
        return {
            teh: [],
            perfume: [],
            skincare: [],
            groceries: [],
            decorative: [],
            error: []
        }
    },
    methods: {
        fetchProducts() {
            axios.get("/auth/products")
            .then(data => {
                const products = data.products
                this.teh = products.filter(pr => pr.id < 11);
                this.perfume = products.filter(pr => pr.id > 10 && pr.id < 16);
                this.skincare = products.filter(pr => pr.id > 15 && pr.id < 21);
                this.groceries = products.filter(pr => pr.id > 20 && pr.id < 25);
                this.decorative = products.filter(pr => pr.id > 25 && pr.id < 30);
                console.log(products);
            })
        }
    },
    setup() {

      return {
      }
    }
}
</script>
<!-- .catch(error => {
                if (error.response.status === 403) {
                    this.$router.push({name: 'login'})
                }else if (error.response.status === 401) {
                    this.$router.push({name: 'login'})
                }
            }); -->