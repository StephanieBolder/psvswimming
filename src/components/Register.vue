<template>
    <div class="mt-16 ">

<div class="ml-16 md:ml-24 lg:ml-32 ">


 <div class="text-xl font-bold mt-4 ">Registration</div>
    <div class="bg-red-400 z-40 -mt-2.5 py-1 w-32 "></div>

    <div class="w-10/12 ">
        <div class="mt-8 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
    </div>


    <div class="flex flex-col justify-center w-10/12">
<v-text-field v-model="emailInput"
      class="rounded-md mt-16 "
        label="Full name"
        required
        outlined
        :rules="emailRules"
        color="#00000"
      ></v-text-field>
      <v-text-field v-model="emailInput"
      class="rounded-md mt-2"
        label="E-mail"
        required
        outlined
        :rules="emailRules"
        color="#00000"
      ></v-text-field>
      <v-text-field v-model="passwordInput"
      class="mt-2"
      label="Set Password"
      required
      outlined
      color="#85CBE6"
      type="password"
      autocomplete="on"
      ></v-text-field>
       <v-text-field v-model="passwordInput"
       class="mt-2"
      label="Confirm Password"
      required
      outlined
      color="#85CBE6"
      type="password"
      autocomplete="on"
      ></v-text-field>


<router-link :to="{ name: 'checkmail' }">
<button v-on:click="authenticate" class=" bg-black text-white py-2 rounded-md mt-12 py-3 w-full">Join</button>
</router-link>

      <router-link :to="{ name: 'login' }"><p class="text-gray-400 font-light text-sm mt-4 text-center ">Already have an account? <b class="text-black">Login</b></p></router-link>

</div>
    </div>
    </div>








</template>

<script>
export default {}
</script>

<style scoped>

</style>
