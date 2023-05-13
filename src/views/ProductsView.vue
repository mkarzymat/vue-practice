<template>
  <div class="products mt-32">
    <div class="mb-10">
      <h2 class="f-sBold text-2xl">Technologies</h2>
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
      <h2 class="f-sBold text-2xl">Perfume</h2>
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
      <h2 class="f-sBold text-2xl">Cream</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in cream" 
        :key="res.cream" 
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
      <h2 class="f-sBold text-2xl">Diet Foods</h2>
    </div>
    <div class="productGrid">
      <CardView v-for="res in dietFoods" 
        :key="res.dietFoods" 
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
      <h2 class="f-sBold text-2xl">Decorative</h2>
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
            cream: [],
            dietFoods: [],
            decorative: [],
            error: []
        }
    },
    methods: {
        fetchProducts() {
            axios.get("/auth/products").then(({ data }) => {
                const products = data.products;
                this.teh = products.filter(pr => pr.id < 11);
                this.perfume = products.filter(pr => pr.id > 10 && pr.id < 17);
                this.cream = products.filter(pr => pr.id > 16 && pr.id < 21);
                this.dietFoods = products.filter(pr => pr.id > 20 && pr.id < 25);
                this.decorative = products.filter(pr => pr.id > 25 && pr.id < 30);
                console.log(products);

                return {
                  products
                }
            }).catch(error => {
                if (error.response.status === 403) {
                    this.$router.push({ name: "login" });
                }
            });
        }
    },
}
</script>
