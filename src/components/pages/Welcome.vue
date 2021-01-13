<template>
    <div class="flex flex-col  items-center text-xl">
        <img class="mt-32 mb-16 w-9/12" src="../../assets/loginpage.png" />
        <heading class="">Welkom bij PSV Zwemmen</heading>
        <div class="w-7/12 mb-4">
        <router-link to="login">
           <secondary-button class="mt-24 ">Inloggen</secondary-button></router-link>
        </div>
        <div class="w-7/12 ">
        <primary-button class="mt-4">Registreren</primary-button></div>
       
    </div>
</template>
    

<script>
import Heading from '../../components/shared/Heading.vue';
import PrimaryButton from "../../components/shared/PrimaryButton";
import SecondaryButton from '../../components/shared/SecondaryButton';


export default {
  components: { PrimaryButton, SecondaryButton, Heading, },
    
}
</script>

<style scoped>

</style>