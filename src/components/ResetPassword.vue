<template>
    <div class="mt-32 ">
        <div class="flex justify-center">
            <img class="w-6/12 " src="@/assets/resetpassword.png" alt="" />
        </div>

<div class="ml-16 md:ml-24 lg:ml-32 ">


 <div class="text-xl font-bold mt-4 ">Forgot your password?</div>
    <div class="bg-red-400 z-40 -mt-2.5 py-1 w-48 "></div>

    <div class="w-10/12 ">
        <div class="mt-8 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>


    <div class="flex justify-center flex-col ">
<v-text-field v-model="emailInput"
      class="rounded-md mt-8 "
        label="Phone number or email"
        required
        outlined
        :rules="emailRules"
        color="#00000"
      ></v-text-field>

<router-link :to="{ name: 'checkmail' }">
<button v-on:click="authenticate" class=" bg-black text-white py-2 rounded-md mt-12 py-3 w-full">Reset password</button></router-link>

      <router-link :to="{ name: 'register' }"><p class="text-gray-400 font-light text-sm mt-4 text-center ">Don't have an account yet? <b class="text-black">Register</b></p></router-link>

</div>
    </div>
    </div>
      </div>  







</template>

<script>
export default {}
</script>

<style scoped>

</style>
