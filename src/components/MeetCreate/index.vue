<template>
    <div class="container">
        <div>{{meet}}</div>
        <label>Lenex File
            <input type="file" id="file" ref="file" v-on:change="setFile()">
            <div id="uploading">{{uploadStatus}}</div>
        </label>
        <button v-on:click="uploadFile()">Import meet</button>
        <template v-if="fileProcessed"> 
            <label for="deadlineAthlete">Deadline registering for Athlete</label>
            <input id="deadlineAthlete" type="date" v-model="deadlineAthlete">

            <label for="deadlineAthleteWithdraw">Deadline withdrawal for Athlete</label>
            <input id="deadlineAthleteWithdraw" type="date" v-model="deadlineAthletewithdraw">

            <label for="deadlineCoach">Deadline approval from Coach</label>
            <input id="deadlineCoach" type="date" v-model="deadlineCoach">

            <button v-on:click="createMeet()">Create meet</button>
            <div id="meetCreated">{{meetCreated}}</div>
            <button v-if="meetCreated" v-on:click="resetAll()">Created another meet</button>


        </template>

</template>
<script>
import MeetService from '../../services/MeetService'
const meetService = new MeetService();

export default {
    name: 'meetCreate',
    data(){
        return{
            file:'',
            uploadStatus:'',
            meetCreated:'',
            meet: '',
            fileProcessed: false,
            dealindeAthlete:'12-12-2020',
            deadlineAthletewithdraw: '12-1-2021',
            deadlineCoach: '1-1-2021',
        }
    },
    methods: {
        setFile(){
            this.file = this.$refs.file.files[0]
        },
        uploadFile(){
            this.uploadStatus = "The meet is being extracted from the Lenex file, please wait."
            meetService.createMeetFromLenexFile(this.file).then(response => {
                this.meet = response.data
                this.uploadStatus = "The meet is extracted, please add the deadlines and finalize registering the meet."
                this.fileProcessed = true
            })

        },
        createMeet(){
            meetService.addDeadlineToMeet(this.meet.json.appId, this.dealindeAthlete, this.deadlineCoach, this.deadlineAthletewithdraw).then(response => {
                this.meetCreated = "The meet is succesfully created, click the button below the add another one."
            })
        },
        resetAll(){
            this.$refs.file.value = ''
            this.file = ''
            this.uploadStatus = ''
            this.meetCreated = ''
            this.meet = ''
            this.fileProcessed = false
            this.dealindeAthlete = '12-12-2020'
            this.deadlineAthletewithdraw = '12-1-2021'
            this.deadlineCoach = '1-1-2021'
        }
    }
}
</script>