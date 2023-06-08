<template>
    <div @click="click" class="flex justify-end rounded-lg">
        <div  class="flex items-end w-12 h-12 pl-2.5 pb-2.5 relative rounded-lg hover:bg-gray-100">
            <div class="flex justify-center items-center w-4 h-4 mb-4 ml-4 p-2 rounded-3xl bg-red-600 text-white z-10">
                <p class="f-med text-xs">{{ cartQuantity }}</p>
            </div>
            <img src="../assets/icons/cart.png" class="w-6 z-0 absolute" />
        </div>
    </div>
</template>

<script>
import {useCartStore} from "../stores/cart";

export default {
    name: 'CartView',
    props: [
        'click',
        'length'
    ],
    data() {
        return {
        }
    },
  computed: {
    cartQuantity() {
      return useCartStore().getData.length
    }
  },
    methods: {

    }
}
</script>