<template> 
    <main class="flex mt-32 w-5/6">
        <div v-if="data" class="flex  rounded-lg p-5 shadow-md">
            <div class=" defaultShadow max-w-xl h-auto rounded-lg overflow-hidden">
                <img class="w-full" :src="data.images[2]" alt="">
            </div>
            <div class="ml-9 w-2/4 ">
                    <p class=" f-sBold text-5xl">{{ data.brand }}</p>
                <div class="flex justify-between w-11/12  mt-11 p-5 h-auto rounded-lg defaultBorder shadow-md">
                    <div class="flex flex-col gap-3 w-64">
                        <p class="f-sBold text-3xl">{{ data.title }}</p>
                        <p class="f-med">{{ data.category }}</p>
                        <h4 class="f-med flex items-end text-xl">
                            {{ $t('card.discount') }} &nbsp; &nbsp;
                            <p class="text-red-600 text-2xl f-sBold">/ &nbsp;{{ data.discountPercentage }} %</p>   
                        </h4>
                        <p class="f-med mt-6">{{ data.description }}</p>
                    </div>
                
                    <div class="flex flex-col gap-8 w-40">
                        <p class="f-sBold text-2xl text-right">{{ data.price }} $</p>
                        <button class="btn" @click="addCart">Add cart</button>
                    </div>
                </div>
            </div>
        
        </div>
    </main>
</template>

<script>
import axios from '../api/axios'

export default {
    name: 'ProductView',
    created() {
        
        this.fetchProducts();
    },
    data() {
        return {
            data: null
        }
    },
    methods: {
        fetchProducts() {
                const productId = this.$route.params.id

                axios.get("/products/" + productId)
                .then(response => {
                this.data = response
                console.log(response)
                });
        },
        addCart() {
        this.$notify({
          text: 'Added to cart'
        });
      }
        
    },
}
</script>

<style scoped>
</style>