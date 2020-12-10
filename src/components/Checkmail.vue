<template>
    <div class="mt-16 ">
        <div class="flex justify-center">
            <img class="w-8/12 mt-24" src="@/assets/mailbox.png" alt="" />
        </div>

<div class="ml-20 md:ml-24 lg:ml-32 ">


 <div class="text-xl font-bold mt-4 ">Check your mailbox</div>
    <div class="bg-red-400 z-40 -mt-2.5 py-1 w-48 "></div>

    <div class="w-10/12 ">
        <div class="mt-8 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

        <router-link :to="{ name: 'login' }">
<button v-on:click="authenticate" class=" bg-black text-white py-2 rounded-md mt-16 py-3 w-full">Login</button></router-link>

</div>
    </div>
    </div>







</template>

<script>
export default {}
</script>

<style scoped>

</style>
