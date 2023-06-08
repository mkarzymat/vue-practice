import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({ data: [] }),
    getters: {
        getData: (state) => state.data,
    },
    actions: {
        addToCart(productId) {
            this.data.push(productId)
            this.setToLocalStorage()
        },
        removeFromCart(productId) {
            this.data = this.data.filter(item => item !== productId)
            this.setToLocalStorage()
        },
        clearCart() {
            this.data = []
            this.setToLocalStorage()
        },
        setToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.data))
        },
        getFromLocalStorage() {
            this.data = JSON.parse(localStorage.getItem('cart'))
        }
    },
})