import { defineStore } from 'pinia'

export const useProductStore = defineStore('productId', {
    state: () => ({ id: null }),
    getters: {
        getId: (state) => state.id,
    },
    actions: {
        setId(prodId) {
            this.id = prodId
            console.log(this.id);
        },
    },
})