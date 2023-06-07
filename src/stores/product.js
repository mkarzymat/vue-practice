import { defineStore } from 'pinia'

export const useProductStore = defineStore('productId', {
    state: () => ({ data: null }),
    getters: {
        getData: (state) => state.data,
    },
    actions: {
        
        setData(prodData) {
            this.data = prodData
        },
    },
})