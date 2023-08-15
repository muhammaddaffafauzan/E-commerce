<template>
<Navbar></Navbar>
<router-view/>
<Footer></Footer>
</template>
<script setup>
import "flowbite/dist/flowbite"
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>