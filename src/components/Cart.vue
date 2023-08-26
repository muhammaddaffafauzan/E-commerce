<template>
  <div
       class="flex-row absolute inline-flex items-center justify-center md:mr-8 mt-5 w-5 h-5 text-xs font-bold text-white bg-lime-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        {{ getCart.length }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
 name: 'Cart',
 computed: {
     ...mapGetters("cart", ["getCart"])
 },
 methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['addToCart']),
    },
    beforeMount() {
        this.fetchCart()

    }
}
</script>