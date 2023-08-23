<template>
 <header class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
      <!-- <span class="mr-2 text-4xl text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
      </span> -->
      <span>comet</span><span class="text-sky-400"> Apparel</span>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation"  class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="text-gray-600 md:mr-12 hover:text-blue-600"><a href="/">Home</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-blue-600"><a href="/product">Product</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-blue-600"><a href="/brands">All Brands</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-blue-600"><a href="/category">Categories</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-blue-600"><a href="#" data-modal-target="defaultModal" data-modal-toggle="defaultModal">Contact</a></li>
        <li>
          <a href="/profile">
            <svg class="w-[24px] h-[24px] text-sky-400 hover:text-lime-600 transation duration-1000 hover:scale-105 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
          </a>
        </li>
        <li class="md:ml-5">
          <a href="/cart">
            <svg class="w-[22px] h-[25px] text-sky-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
  </svg>
  <span v-if="cartItemCount > 0" class="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{{ cartItemCount }}</span>
     </a>
        </li>
        <li class="text-gray-600 ml-5">
          <div v-if="isAuthenticated"> 
          </div>
          <div v-else>
          <a href="/login">
          <button class="rounded-md border-2 border-sky-400 px-6 py-1 font-medium text-sky-400 transition-colors hover:bg-lime-300 hover:text-indigo-900">Login</button>
        </a>
      </div>
        </li>
        <li></li>
      </ul>
    </nav>
  </div>
</header>
<div v-if="isAuthenticated">
<!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="flex-wrap fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="font-sans text-base text-gray-900 sm:px-10">
  <div class="text-base text-gray-900">
    <div class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      
    </div>
  </div>
  <div class="mx-auto mb-20 flex w-full max-w-screen-lg bg-white flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
    <form class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
      <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your e-mail:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="email" type="email" required="" /></div>
      <div class="mb-4"><label class="text mb-2 block font-medium" for="subject">Subject:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="subject" type="subject" required="" /></div>
      <div class="mb-4"><label class="text mb-2 block font-medium" for="message">Message:</label><textarea class="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="message" required=""></textarea></div>
      <div class="flex items-center">
        <div class="flex-1"></div>
        <button class="rounded-xl bg-sky-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</button>
        <button data-modal-hide="defaultModal" type="button" class="ml-2 text-dark-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-dark-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>     
      </div>
    </form>
    <div class="mt-10 bg-sky-800 px-10 py-8 text-gray-200 md:mt-0 md:ml-auto">
      <div class="">
        <p class="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
        <p class="mb-4">Monday – Thursday: 08:00 – 16:00</p>
        <p class="mb-4">Friday: 08:00 - 15:00</p>
        <p class="mb-4">Weekend: Closed</p>
        <p class="mb-4">
          Email:
          <a href="#" class="font-semibold underline">support@apps.io</a>
        </p>
        <p class="mb-4">
          Phone:
          <a href="#" class="font-semibold underline">+46 (0) 10-32 32 322</a>
        </p>
        <hr class="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
        <p class="mb-4">Org.no: 63452-2832</p>
        <p class="mb-4">VAT no: 32353</p>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>