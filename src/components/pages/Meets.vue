<template>
    <div>
        <top-nav-right />
        <div class="">
            <heading class="text-xl flex justify-center mt-8">Meets</heading>
            <div class="text-sm text-center mt-4">Bekijk de meets en registreer je waar je wilt.</div>
        </div>
        <meets-content :events="events"/>
    </div>
</template>

<script>
import MeetService from './../../services/MeetService';
import  MeetsContent from '../../components/meets/MeetsContent.vue';
import TopNavRight from '../../components/shared/TopNavRight.vue';
import Heading from '../../components/shared/Heading.vue';
var meetService = new MeetService();
export default {
    components: {
        MeetsContent, 
        TopNavRight,
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