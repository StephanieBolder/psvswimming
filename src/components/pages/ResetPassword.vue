<template>
    <div class="">
        <top-nav-left />
        <div class="flex justify-center">
            <img class="mt-8 w-6/12 " src="@/assets/resetpassword.png" alt="" />
        </div>

<div class="ml-16 md:ml-24 lg:ml-32 ">


 <heading class="w-6/12">Wachtwoord vergeten?</heading>

    <div class="w-9/12 ">
        <div class="mt-8 text-sm font-light">Vul je telefoonnummer of e-mailadres in en ontvang een code om je wachtwoord te resetten.</div>

        <form action="">

      <div class="flex flex-col mb-8">
        <input class="mt-8 bg-input p-3 rounded-sm font-light text-sm" type="text" v-model="form.name" placeholder="Telefoonnummer of e-mail"/>

      </div>
        </form>


<router-link to="checkmail">
 <primary-button class="mt-8">Code versturen</primary-button></router-link>

     <div class="flex justify-center">
      <router-link class="text-xs font-light text-ondertext mt-4 " to="register">Nog geen account? <span class="text-black font-semibold">Registreer!</span></router-link>
      </div>
</div>
    </div>
    </div> 







</template>

<script>
import PrimaryButton from '../../components/shared/PrimaryButton.vue';
import Heading from '../../components/shared/Heading.vue';
import TopNavLeft from '../../components/shared/TopNavLeft.vue';

export default {
  components: { PrimaryButton, Heading, TopNavLeft },
  
   data() {
       return {
           form: {
               name: "",
               email: "",
               password: "",
           }
       }
   }
}
</script>

<style scoped>

</style>
