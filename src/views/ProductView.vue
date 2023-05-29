<template> 
    <main class="flex mt-32 w-5/6">
        <!-- <button @click="fetchProducts">dld</button> -->
        <div class="flex justify-between rounded-lg p-5 shadow-md w-full ">
            <div class=" defaultShadow max-w-xl h-auto rounded-lg overflow-hidden">
                <img class="w-full" :src="data.images[2]" alt="">
            </div>
            <div class="ml-9 w-2/4 ">
                    <p class=" f-sBold text-5xl">{{ data.brand }}</p>
                <div class="flex justify-between w-11/12  mt-11 p-5 h-72 rounded-lg defaultBorder shadow-md bg-lime-50">
                    <div class="flex flex-col gap-3">
                        <p class="f-sBold text-3xl">{{ data.title }}</p>
                        <p class="f-med">{{ data.category }}</p>
                        <h4 class="f-med flex items-end text-xl">
                            {{ $t('card.discount') }} &nbsp; &nbsp;
                            <p class="text-red-600 text-2xl f-sBold">/ &nbsp;{{ data.discountPercentage }} %</p>   
                        </h4>
                        <p class="f-med mt-6">{{ data.description }}</p>
                    </div>
                
                    <div class="flex flex-col gap-8 w-24">
                        <p class="f-sBold text-2xl text-right">{{ data.price }} $</p>
                        <button class="btn">Buy</button>
                    </div>
                </div>
            </div>
                        <!-- brand
                        "Apple"
                        category
                        "smartphones"
                        description
                        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ..."
                        discountPercentage
                        17.94
                        id
                        2
                        images
                        price
                        899
                        rating
                        4.44
                        stock
                        34
                        thumbnail
                        title -->
        
        </div>
    </main>
</template>

<script>
import axios from '../api/axios'
import { useProductStore } from '../stores/product'

export default {
    name: 'ProductView',
    created() {
        
        this.fetchProducts();
    },
    data() {
        return {
            data: []
        }
    },
    methods: {
        fetchProducts() {
                // const productId = useProductStore().getId
                const productId = this.$route.params.id

                axios.get("/products/" + productId)
                .then(response => {
                this.data = response
                console.log(response)

                console.log(productId)
                });

            // if (!useProductStore().getId) {
            //     console.log(null);
            
            // } else {
            //     axios.get("/products/" + productId)
            //     .then(response => {
            //     this.data = response
            //     console.log(response);
            // })

            
            
        }
        
    },
}
</script>

<style scoped>
</style>