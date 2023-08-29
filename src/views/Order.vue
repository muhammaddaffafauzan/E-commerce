<template>
  <div class="px-4 py-16 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)" width="52" height="24"></rect>
          </svg>
          <span class="relative">Thank</span>
        </span>
        You For Your Order
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Order Code: {{ getOrder.code }}
      </p>
      <p class="font-semibold text-gray-600 md:text-xs italic">
        a copy your order summary has been sent to {{ getOrder.user.email }}
      </p>
    </div>
    <div class="bg-gray-100 h-9 w-max-full   text-center relative mt-5">
      <span class="text-gray-700 font-bold text-2xl mt-5">order summary</span>
    </div>
    <div class="grid grid-rows-4 grid-flow-col gap-1 mt-6 max-w-sm mb-8 sm:mx-auto lg:max-w-full">
      <div>
        <span class="font-bold">Order Code: </span>
        <dd class="text-x font-semibold">{{ getOrder.code }}</dd>
      </div>
      <div>
        <span class="font-bold">Name: </span>
        <dd class="text-x font-semibold">{{ getOrder.user.name }}</dd>
      </div>
      <div>
        <span class="font-bold">Email: </span>
        <dd class="text-x font-semibold">{{ getOrder.user.email }}</dd>
      </div>
      <div>
        <span class="font-bold">shipping Address: </span>
        <dd class="text-x font-semibold">{{ getOrder.shipping_address.address }},
                  {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }},
                  {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}
                  <dd class="text-base font-semibold">Phone: 
                 <dd class="font-extralight">{{ getOrder.shipping_address.phone }}</dd></dd></dd>
      </div>
      <div>
        <span class="font-bold">Total Order mount: </span>
        <dd class="text-x font-semibold">{{ getOrder.orders[0].grand_total }}</dd>
      </div>
      <div>
        <span class="font-bold">Payment Method: </span>
        <dd class="text-x font-semibold">{{ getOrder.orders[0].payment_type }}</dd>
      </div>
      <div>
        <span class="font-bold">Delivery Type: </span>
        <dd class="text-x font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
      </div>
      <div>
        <span class="font-bold">Billing Address: </span>
        <dd class="text-x font-semibold">{{ getOrder.shipping_address.address }},
                  {{ getOrder.shipping_address.city }},
                  {{ getOrder.shipping_address.state }},
                  {{ getOrder.shipping_address.country }},
                  {{ getOrder.shipping_address.postal_code }}</dd>
      </div>
    </div>
    <div class="bg-gray-100 h-9 w-max-full   text-center relative mt-5">
      <span class="text-gray-700 font-bold text-2xl mt-5">Order Details</span>
    </div>
    <div class="relative overflow-x-auto pt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">No.</th>
              <th scope="col" class="px-6 py-3">Product</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700" v-for="(order, index) in getOrder.orders[0].products.data">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
              {{ index + 1 }}
              </th>
              <td class="px-6 py-4">{{ order.name }}</td>
              <td class="px-6 py-4">{{ order.quantity }}</td>
              <td class="px-6 py-4">{{ order.total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total spending</p>
              <p class="font-semibold text-gray-900">Rp. {{ getOrder.grand_total }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Biaya Jasa</p>
              <p class="font-semibold text-gray-900">
                Rp. {{ (getOrder.orders[0].products.data.length) * 10000 }}
              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total Harga : </p>
            <p class="text-2xl font-semibold text-gray-900">
              Rp. {{(getOrder.grand_total) + (getOrder.orders[0].products.data.length * 10000) }}
            </p>
          </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script>