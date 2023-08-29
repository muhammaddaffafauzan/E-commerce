<template>
  <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 mt-16">
  <a href="#" class="text-2xl font-bold text-gray-800 ml-2">Checkout</a>
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="/product"
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg></a>
          <span class="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white ring ring-sky-500 ring-offset-2" href="#">2</a>
          <span class="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-200 text-xs font-semibold text-white" href="#">3</a>
          <span class="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div class="mt-8 flex-1 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div v-if="getCart.length > 0">

      <div v-for="checkout in getCart" :key="checkout.cart_id" class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{{ checkout.name }}</span>
          <span class="float-right text-gray-400">Count: {{ checkout.qty }}</span>
          <p class="text-lg font-bold">{{ (checkout.regular_price * checkout.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</p>
        </div>
      </div>

      </div>
      <div v-else class="text-center">  
        <img class="cursor-progress md:ml-24 ml-3 md:w-96 w-max-auto" src="../assets/img/no-cart-item.jpg" alt="">
       <span class="font-semibold text-2xl text-gray-500">Product Not Found</span>
      </div>
    </div>

    <p class="mt-8 text-lg font-medium">Payment Methods</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_payment_1" type="radio" name="radio" value="cash_on_delivery" v-model="paymentType" checked required />
        <span class="peer-checked:border-lime-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-lime-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-lime-700 peer-checked:bg-lime-50 flex cursor-pointer select-none rounded-lg border border-lime-300 p-4" for="radio_payment_1">
          <img class="w-14 object-contain" src="../assets/img/cod.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Cash On Delivery(COD)</span>
            <p class="text-slate-500 text-sm leading-6">pay at home</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_payment_2" type="radio" name="radio" value="cash_on_delivery" v-model="paymentType" checked required />
        <span class="peer-checked:border-lime-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-lime-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-lime-700 peer-checked:bg-lime-50 flex cursor-pointer select-none rounded-lg border border-lime-300 p-4" for="radio_payment_2">
          <img class="w-14 object-contain" src="../assets/Logo_dana_blue.svg.webp" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Dana</span>
            <p class="text-slate-500 text-sm leading-6">get 10% discount</p>
          </div>
        </label>
      </div>
    </form>
    <p class="mt-8 text-lg font-medium">Shipping Expeditions</p>
    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" value="standard" v-model="deliveryType" checked required />
        <span class="peer-checked:border-lime-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-lime-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-lime-700 peer-checked:bg-lime-50 flex cursor-pointer select-none rounded-lg border border-lime-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="../assets/img/jnt.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">J&T Express</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            <p class="text-slate-500 text-sm leading-6">Rp.12.000</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" value="express" v-model="deliveryType" checked required />
        <span class="peer-checked:border-lime-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-lime-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-lime-700 peer-checked:bg-lime-50 flex cursor-pointer select-none rounded-lg border border-lime-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="../assets/img/jne.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">JNE</span>
            <p class="text-slate-500 text-sm leading-6">Delivery: 2-40 Days</p>
            <p class="text-slate-500 text-sm leading-6">Rp.10.000</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div class="relative">
        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      
      <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div class="flex flex-col sm:flex-row">
        <div class="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
          </div>
        </div>
        <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          <option value="State">State</option>
          <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Timur">Jawa Timur</option>
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Sumatra Barat">Sumatra Barat</option>
            <option value="Sumatra Selatan">Sumatra Selatan</option>
            <option value="Sumatra Utara">Sumatra Utara</option>
            <option value="Kalimantan Tengah">Kalimantan Tengah</option>
            <option value="Kalimantan Timur">Kalimantan Timur</option>
            <option value="Kalimantan Barat">Kalimantan Barat</option>
            <option value="Kalimantan Utara">Kalimantan Utara</option>
            <option value="Papua Pegunungan">Papua Pegunungan</option>
            <option value="Papua Selatan">Papua Selatan</option>
            <option value="Papua Barat">Papua Barat</option>
            <option value="Sulawesi Tengah">Sulawesi Tengah</option>
            <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
            <option value="Sulawesi Utara">Sulawesi Utara</option>
            <option value="Sulawesi Selatan">Sulawesi Selatan</option>
        </select>
        <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
      </div>

      <!-- Total -->
      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">Rp{{ totaHarga() }}</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">Rp{{ totaHarga()  }}</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">{{
                (totaHarga() * 1).toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })
              }}</p>
      </div>
    </div>
    <button @click="performCheckout" class="mt-4 mb-8 w-full rounded-md bg-sky-500 transation duration-700 hover:scale-105 hover:bg-lime-500 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default{
  computed: {
     ...mapGetters("cart", ["getCart"]),
     ...mapGetters('cart', ['getCheckout']),
 },
 methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('product', ['fetchLatestProducts']),
        ...mapActions('auth ', ['getUserAddress']),
        totaHarga() {
          this.total = this.getCart.reduce((acc, product) => {
            return acc + parseFloat(product.regular_price * product.qty);
          }, 0);
          return this.total.toFixed(2);
        },
        async performCheckout() {
            // Collect the product IDs to be checked out
            const cartItemIds = this.getCart.map(product => product.cart_id);
            // Get user address
            const userAddressResponse = await this.$store.dispatch('auth/getUserAddress');
            const userAddressId = userAddressResponse.data[0].id;

            const checkoutPayload = {
                shippingAddress: userAddressId,
                billingAddress: userAddressId,
                paymentType: this.paymentType,
                deliveryType: this.deliveryType,
                cart_item_ids: cartItemIds
            };

            // Call the checkout action with the collected IDs and user address
            await this.$store.dispatch('cart/checkoutCart', checkoutPayload)
            .then(() => {
          this.$router.push(`/order/${this.getCheckout.order_code}`);
        });
        }
        
    },
    beforeMount() {
        this.fetchCart()

    },
}
</script>