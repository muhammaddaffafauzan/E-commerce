<template>
  <section class="mx-auto max-w-2xl px-4 py-16 bg-gray-100 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
    <div class="mx-auto mt-8 max-w-2xl md:mt-1">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <div v-if="getCart.length > 0">
              <li v-for="cart in getCart" :key="cart.cart_id" class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="../assets/img/tag.jpg" alt="" />
                </div>
              
                <div class="flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{{ cart.name }}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">Jumlah: {{ cart.qty }}</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:mr-8">{{ (cart.regular_price * cart.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>

                      <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                          <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-lime-600 hover:text-white" @click="changeQty({cartId: cart.cart_id, typeQty: 'minus'})">-</button>
                          <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{{ cart.qty }}</div>
                          <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-lime-600 hover:text-white" @click="changeQty({cartId: cart.cart_id, typeQty: 'plus'})">+</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="top-0 right-0 flex sm:bottom-0 sm:top-auto md:ml-auto ml-auto mt-auto">
                    <button type="button" @click="removeItem(cart.cart_id)" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>

                  
                </div>
              </li>
            </div>
            <div v-else>
             <div class="text-center">
              <img class="cursor-progress  md:ml-28 ml-3 md:w-110 w-max-auto" src="../assets/img/no-cart-item.jpg" alt="">
              <span class="text-gray-600 font-bold text-2xl">Your shopping bag is empty. Start shopping.</span>
             </div>
            </div>
            </ul>
          </div>
        

          <div class="mt-10 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">Rp.399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">Rp.8.00</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">Rp.&ensp;</span>{{ totaHarga }}</p>
          </div>

          <div class="mt-6 text-center">
            <a href="/checkout">
            <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-lime-400">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
</section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default{
  computed: {
     ...mapGetters("cart", ["getCart"]),
     totaHarga() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty);
          }, 0);
          return this.total.toFixed(2);
        },
        totalItems() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty);
          }, 0);
          return this.total.toFixed(2);
        }
 },
 methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['addToCart']),

        changeQty(cartId, typeQty) {
          this.$store.dispatch('cart/changeQtyCart', cartId, typeQty)
        },

        removeItem(cartId) {
          this.$store.dispatch('cart/removeFromCart', cartId)
        }, 
    },
    beforeMount() {
        this.fetchCart()

    },
}
</script>