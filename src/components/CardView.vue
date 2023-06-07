<template>
    <div class="p-2.5 rounded-lg defaultShadow mb-10">
        <div class="flex justify-center items-center defaultShadow max-h-72 w-full rounded-lg overflow-hidden mb-5">
            <img class="w-full" :src="img" alt="">
        </div>
        <div class="gap-3 flex flex-col">
            <h3 class="f-sBold text-lg">{{ title }}</h3>
                <div class="">
                    <h4 class="f-med">
                    {{ category }}
                    </h4>
                </div>
                <div class="">
                    <h4 class="f-med">
                        {{ $t('card.stock') }}: {{ stock }}
                    </h4>
                </div>
                <div class="">
                    <h4 class="flex f-sBold">
                        {{ $t('card.discount') }} / &nbsp;
                    <p class="text-red-600">{{ discount }}%</p> 
                    </h4>
                </div>
                <div class="flex justify-between items-center mt-3.5 mb-4">
                  <div class="">
                    <h4 class="f-sBold">
                    $ {{ price }}
                    </h4>
                  </div>
                <button  @click="setProductData" class="f-med btn">
                    <p>{{ $t('card.addToCart') }}</p>
                </button>
                <!-- <button class="f-med btn" @click="setProductId">
                    <p @click="setProductId">{{ $t('card.addToCart') }}</p>
                </button> -->
                </div>
                <div class="">
                    <h4 class="f-reg mb-5 text-sm">
                    {{ description }}
                    </h4>
                </div>
        </div>
    </div>
</template>

<script>
import { useProductStore } from '../stores/product'

export default {
    name: 'this-Card',
    data() {
        const data = this.productData
        return {
            quanity: [],
            data
        }
    },
    props: [
        'title',
        'img',
        'price',
        'text',
        'category',
        'description',
        'discount',
        'stock',
        'productData'
    ],
    methods: {
        setProductData() {
        this.quanity.push(
            this.data
        )

        
        useProductStore().setData(this.quanity)
        console.log(useProductStore().getData);

        this.$notify({
          text: 'Добавлено в карзину'
        });













        //   this.$router.push({name: 'product', params: {id: this.id}})
        // localStorage.setItem('prodData', this.data.id)

        }
    }
}
</script>