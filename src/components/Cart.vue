<template>
  <div
       class="md:flex-row absolute inline-flex items-center justify-center md:mr-8 mt-5 w-5 h-5 text-xs font-bold text-white bg-lime-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        {{ getCart.length }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
 name: 'Cart',
 data() {
     return {
         total: 0
     }
 },
 computed: {
     ...mapGetters("cart", ["getCart"])
 }
}
</script>