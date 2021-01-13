<template>
  <div>
   
    <div class="w-10/12 flex flex-col mx-auto ">
        <heading class="w-4/12 text-xl my-16">Registratie</heading>
    <form action="">

      <div class="flex flex-col mb-4">
        <label for="Volledige naam
        ">Volledige naam</label>
        <input class="ml-2 mt-1 bg-input p-3 rounded-sm font-light text-sm" type="text" v-model="form.name" placeholder="John doe"/>

      </div>
       <div class="flex flex-col mb-4">
        <label for="email
        ">E-mail</label>
        <input class="ml-2 mt-1 bg-input p-3 rounded-sm font-light text-sm" type="text" v-model="form.email" placeholder="loremipsum@gmail.nl"/>

      </div>
      <div class="flex flex-col mb-4">
        <label for="password
        ">Wachtwoord aanmaken</label>
        <input class="ml-2 mt-1 bg-input p-3 rounded-sm font-light text-sm" placeholder="wachtwoord" type="password" v-model="form.password"/>
        </div>
        <div class="flex flex-col">
        <label for="password
        ">Wachtwoord herhalen</label>
        <input class="ml-2 mt-1 bg-input p-3 rounded-sm font-light text-sm" type="password" v-model="form.password" placeholder="wachtwoord"/>
      </div>
      <router-link to="checkmail">
      <primary-button class="mt-16">Registreren</primary-button></router-link>
      <div class="flex justify-center">
      <router-link class="text-xs font-light text-ondertext mt-2" to="login">Heb je al een account? <span class="text-black font-semibold">Login!</span></router-link>
      </div>
    </form>
    </div>

  </div>
</template>

<script>

// import AuthService from "../services/AuthService";
import Heading from "../../components/shared/Heading.vue";
import PrimaryButton from '../../components/shared/PrimaryButton.vue';
// let auth = new AuthService();
export default { 
  components: { Heading, PrimaryButton },
  
   data() {
       return {
           form: {
               name: "",
               email: "",
               password: "",
           }
       }
   },
   methods: {
      register() {
      auth
        .authenticate(this.form.email, this.form.password)
        .then((response) => {
          const { id, username, email, role } = response.data;
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("id", id);
          this.$store.commit("setUser", { id, username, email, role });
          this.$router.push("/");
        });
    },

   }
}
</script>

<style>

</style>