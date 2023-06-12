<template>
    <div v-if="$data" class="flex flex-col gap-10 mt-32 w-4/5">
        <div 
        class="flex"
        v-for="product in cartProducts"
        :key="product.id"
        >
            <div class="flex p-5 w-8/12 rounded-lg  defaultShadow bg-white">
                <div class="w-44 h-44 rounded-lg defaultBorder">
                    <img class="w-full rounded-lg" :src="product.images[1]" alt="">
                </div>
                <div class="flex items-center justify-between gap-2 w-2/3 ml-8 ">
                    <div class="flex flex-col gap-2">
                        <h3 class="f-sBold" >{{ product.title }}</h3>
                        <p class="f-med">{{ product.category }}</p>
                    </div>
                    <div class="flex flex-col items-end gap-6">
                        <h3 class="f-sBold text-2xl" >{{ product.price }} $</h3>
                        <button class="btn">Buy</button>
                    </div>
                </div>
                    <div @click="removeProduct(product.id)" class="flex justify-center items-center rounded w-7 h-7  hover:bg-gray-200 hover:defaultBorder">
                        <img class="w-4 " src='../assets/icons/close.png' alt="">
                    </div>
            </div>
            <div class="p-5 ml-10 w-64 rounded-xl bg-white defaultShadow">
                
            </div>
        </div>
    </div>      
</template>

<script>
import { useCartStore } from '../stores/cart';
import axios from "../api/axios";

export default {
    name: 'CartPageView',
    props: [
    ],
    created() {
    },
    data() {
        return {
          cartProducts: []
        }
    },
    methods: {
      initData() {
        let productIds = useCartStore().getData

        productIds.forEach(product => {
          axios.get("/products/" + product)
              .then(response => {
                this.cartProducts.push(response)
              });
        })
      },
        removeProduct(productId) {
          this.cartProducts = this.cartProducts.filter(item => item.id !== productId)
          useCartStore().removeFromCart(productId)
        },
        dataNull() {
            if (this.productData == null) {
                this.$notify({
                    text: 'Тут пока ничего !'
                })
                this.$router.push({ name: 'products'})
            }
        }
    }
}
</script>