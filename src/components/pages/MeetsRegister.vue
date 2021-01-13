<template>
    <div>
        <top-nav-left />
        <div class="">
            <heading class="border-darkred flex justify-center mt-4">Registeren voor meet</heading>
            <div class="font-light text-sm text-center mt-8">Bekijk de meets en registreer je waar je wilt.</div>
        </div>
        <meets-registration :events="events"/>
    </div>
</template>

<script>
import MeetService from './../../services/MeetService';
import  MeetsRegistration from '../../components/meets/MeetsRegistration.vue';
import TopNavLeft from '../../components/shared/TopNavLeft.vue';
import Heading from '../../components/shared/Heading';

var meetService = new MeetService();
export default {
    components: {
        MeetsRegistration, 
        TopNavLeft,
        Heading,

    },
    data() {
        return {
            events: [],
        }
    }, 
    mounted() {
          meetService.getAllMeets().then(response => {
      console.warn(response);
      if(response.status == 200) {
        if(response.data != null && response.data !== "") {
          this.events = response.data;
        }else{
          //TODO SHOW ERROR AND REDIRECT USERS BACK TO /MEETS
          console.error(response);
        }
      }else{
        //TODO SHOW ERROR AND REDIRECT USERS BACK TO /MEETS
        console.error(response);
      }
    });
    }
}
</script>

<style>

</style>