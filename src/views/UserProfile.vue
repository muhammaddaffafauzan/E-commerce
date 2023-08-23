<template>
  <!-- component -->
<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 border-4 border-sky-200 hover:border-lime-200 transition duration-700 hover:scale-110  rounded-full mx-auto" :src="user.avatar" alt="&ensp;&ensp;Profile">
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ user.name }}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>{{ user.email }}</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Balance</td>
                    <td class="px-2 py-2">$ {{ user.balance }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{{ user.phone }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{{ user.email }}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a @click="logout" class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="/">Logout</a>
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
        ...mapGetters("auth", ["getUser"]),
        user() {
            return this.getUser;
        },
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
        ...mapActions('auth', ['logout']),
    },
    async mounted() {
        // fetch user information
        const user = await this.getUserInfo();

        // if user information
        if (user) {
            this.$store.commit("auth/SET_USER", user);
        }
    },
};
</script>