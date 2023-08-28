
<template>
  <!-- component -->
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

<div class="mx-auto max-w-2xl px-4 py-16 bg-gray-100 sm:px-6 sm:py-5 lg:max-w-full lg:px-8">
 

    <div class="container mx-auto my-20 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-sky-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                           :src="user.avatar"
                            alt="">
                    </div>
                    
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ user.name }}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">{{ user.email }}</h3>
                    
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Balance</span>
                            <span class="ml-auto">Rp.{{ user.Balance }}0</span>
                        </li>
                    </ul>
                    <a href="/">
                    <button @click="logout"
                        class="block w-full bg-sky-100 text-blue-800 text-sm font-semibold rounded-lg hover:bg-lime-200 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Logout</button></a>
                </div>
                <!-- End of profile card -->
                
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Profile</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Name</div>
                                <div class="px-4 py-2">{{ user.name }}</div>
                            </div>
                            
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2">{{ user.email }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Phone</div>
                                <div class="px-4 py-2">{{ user.phone }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                <div class="px-4 py-2" v-for="item in address.data">
                                  {{ item.address }}, {{ item.city }}, {{ item.state }},
                                   {{ item.country }}, {{ item.postal_code }}
                                </div>
                            </div>
                            
                          
                        </div>
                    </div>
                    <button
                        class="block w-full bg-sky-100 text-blue-800 text-sm font-semibold rounded-lg hover:bg-lime-200 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Add Address</button>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Purchase History</span>
                            </div>
                            <!-- isi history -->
                            
<div class="relative overflow-y-auto h-72 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Details
                </th>
                <th scope="col" class="px-6 py-3">
                    info
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="orderItems in order" :key="orderItems.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-dark whitespace-nowrap dark:text-white">
                    {{ orderItems.code }}
                    <dd>{{ orderItems.date }}</dd>
                </th>
                <td class="px-6 py-4" >
                  product {{ order.length }}
                </td>
                <td class="px-6 py-4">
                   {{ orderItems.grand_total.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}
                </td>
                <td class="px-6 py-4 text-left">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Views details</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

                        </div>
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
            </div>
        </div>
    </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("auth", ["getUser"]),
        ...mapGetters("auth", ["gettersUserAddress"]),
        ...mapGetters('order', ['getAllOrder']),
        user() {
            return this.getUser;
        },
        address() {
         return this.gettersUserAddress;
    },
     order() {
        return this.getAllOrder;
     }
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
        ...mapActions('auth', ['getUserAddress']),
        ...mapActions('auth', ['logout']),
        ...mapActions('order', ['fetchAllOrderData'])
  },
  async mounted() {
    this.fetchAllOrderData();
    this.getUserAddress();
    const user = await this.getUserInfo();

        // if user information
        if (user) {
            this.$store.commit("auth/SET_USER", user);
        }
    },
};
</script>