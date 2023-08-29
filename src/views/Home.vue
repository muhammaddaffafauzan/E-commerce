<template>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap" rel="stylesheet" />
<div class="flex min-h-screen min-w-screen">
  <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
    <!-- Left Column -->
    <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
      <div class="mb-16 lg:my-auto lg:max-w-lg">
        <div class="mb-6 max-w-xl">
          <div>
            <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">Discon Up to 80%</p>
          </div>
          <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
            the Comet Apparel is having a 
            <span class="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 py-1 font-bold text-white">payday special</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.</p>
        </div>
        <div class="flex items-center">
          <a href="/product" class="bg-sky-400 mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"> Shop Now </a>
          
        </div>
      </div>
    </div>
    <!-- /Left Column -->

    <!-- Right Column -->
    <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
      <!-- Col 2 -->
      <div class="hidden w-56 items-center space-y-3 lg:flex">
        <div class="overflow-hidden rounded-xl bg-yellow-400">
          <img class="h-full w-full object-cover" src="../assets/img/pr1.jpg" alt="" />
        </div>
      </div>
      <divc lass="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80 pb-5">
        <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
          <img class="mx-auto h-full w-full object-cover" src="../assets/img/pr2.jpg" alt="" />
        </div>
        <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
          <img class="mx-auto h-full w-full object-cover" src="../assets/img/wr5.jpg" alt="" />
        </div>
        <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
          <img class="mx-auto h-full w-full object-cover" src="../assets/img/pr4.jpg" alt="" />
        </div>
      </divc>
    </div>
    <!-- /Right Column -->
  </div>
</div>
<!-- card produk -->
<section>
  <div class="container mx-auto p-8 bg-gray-100">
    <span class="text-left font-bold text-3xl">Discover the Iconic Style of Comet <span class="text-sky-400">Apparel</span></span>
    <div class="grid grid-cols-4 gap-4">
  
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />


<div v-for="product in getLatestProducts.data.slice(0,4)" :key="product.id" class="group my-10 flex w-full max-w-xs flex-col overflow-hidden bg-white">
  <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug } }" class="grup relative flex h-80 w-72 overflow-hidden">
    <img class="absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsYXplcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
  </router-link>
  <div class="mt-4 pb-5">
    <a href="#">
      <h5 class="text-center tracking-tight text-gray-500">{{ product.name }}</h5>
    </a>
    <div class="mb-5 flex justify-center">
      <p>
        <span class="text-sm font-bold text-gray-900">{{ product.base_price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</span>
      </p>
    </div>
  </div>
</div>

  </div>
</div>
  
</section>
<!-- card produk -->
<section class="">
  <div class="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
    <div class="px-4 py-8 md:px-6 md:py-12 lg:px-20">
      <h1 class="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

      <div class="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' Scotch</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img class=""  src="../assets/img/pr1.jpg" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Mens' black</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img class=""  src="../assets/img/pr3.jpg" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div class="">
            <h2 class="text-xl text-gray-600">Womens' black white</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-8 flex items-center justify-center md:mt-24">
            <img  src="../assets/img/wr2.jpg" alt="" />
          </div>
        </article>
      </div>

      <div class="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
        
        <article class="bg-slate-50 p-8">
          <div>
            <h2 class="text-xl text-gray-600">Mens' Black</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-28 flex items-center justify-center md:mt-3">
            <img  src="../assets/img/pr4.jpg" alt="" />
          </div>
        </article>
        
        <article class="bg-slate-50 p-8">
          <div>
            <h2 class="text-xl text-gray-600">Womens' Brown</h2>
            <p class="mt-2 text-xl font-semibold text-gray-800"></p>
          </div>
          <div class="mt-28 flex items-center justify-center md:mt-1">
            <img  src="../assets/img/wr5.jpg" alt="" />
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('product', ['getLatestProducts']),
    },
    methods: {
        ...mapActions('product', ['fetchLatestProducts']),
        ...mapActions("cart", ["fetchCart"]),
        ...mapActions('product', ['addToCart']),
        async addToCart(productId) {
     try {
        await this.$store.dispatch('product/addToCart', productId);
        this.fetchCart();
     } catch (error) {
        console.error(error)
     }
    },
    },
    beforeMount(){
    this.fetchLatestProducts();
    this.fetchCart();
  },
    created() {
      this.fetchLatestProducts();
      this.fetchCart();
    },
    
}
</script>