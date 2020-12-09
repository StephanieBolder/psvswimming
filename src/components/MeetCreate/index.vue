<template>
  <div class="container">
    <label
      >Lenex File
      <input type="file" id="file" ref="file" v-on:change="setFile()" />
      <div id="uploading">{{ uploadStatus }}</div>
    </label>
    <v-btn v-on:click="uploadFile()">Import meet</v-btn>
    <template v-if="fileProcessed">
      <date-component v-for="name in dates" :name="name" :key="name" @update="updateDate"/>

      
      <v-btn v-on:click="createMeet()">Create meet</v-btn>
      <div id="meetCreated">{{ meetCreated }}</div>
      <v-btn v-if="meetCreated" v-on:click="resetAll()"
        >Created another meet</v-btn
      >
    </template>
  </div>
</template>
<script>
import MeetService from "../../services/MeetService";
import DateComponent from './dateComponent.vue';


const meetService = new MeetService();

export default {
    components:{
        DateComponent
    },
  data() {
    return {
      file: "",
      uploadStatus: "",
      meetCreated: "",
      meet: "",
      fileProcessed: false,
      dates:["deadlineAthlete", "deadlineAthletewithdraw", "deadlineCoach"],
      deadlineAthlete: "12-12-2020",
      deadlineAthletewithdraw: "12-1-2021",
      deadlineCoach: "1-1-2021",
    };
  },
  methods: {
    setFile() {
      this.file = this.$refs.file.files[0];
    },
    uploadFile() {
      this.uploadStatus =
        "The meet is being extracted from the Lenex file, please wait.";
      meetService
        .createMeetFromLenexFile(this.file)
        .then((response) => {
          this.meet = response.data;
          this.uploadStatus =
            "The meet is extracted, please add the deadlines and finalize registering the meet.";
          this.fileProcessed = true;
        })
        .catch((e) => {
          this.fileProcessed = false;
        });
    },
    updateDate(data){
        if(data.name == "deadlineAthlete") {
            this.deadlineAthlete = data.date
        }
        if(data.name == "deadlineAthletewithdraw") {
            this.deadlineAthletewithdraw = data.date
        }
        if(data.name == "deadlineCoach") {
            this.deadlineCoach = data.date
        }
    },
    createMeet() {
      meetService
        .addDeadlineToMeet(
          this.meet.json.appId,
          this.dealindeAthlete,
          this.deadlineCoach,
          this.deadlineAthletewithdraw
        )
        .then((response) => {
          this.meetCreated =
            "The meet is succesfully created, click the button below the add another one.";
        });
    },
    resetAll() {
      this.$refs.file.value = "";
      this.file = "";
      this.uploadStatus = "";
      this.meetCreated = "";
      this.meet = "";
      this.fileProcessed = false;
      this.dealindeAthlete = "12-12-2020";
      this.deadlineAthletewithdraw = "12-1-2021";
      this.deadlineCoach = "1-1-2021";
    },
  },
};
</script>
<style>
@import "./../../main.scss";
</style>
