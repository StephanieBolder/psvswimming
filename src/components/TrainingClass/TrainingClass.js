import TrainingService from '../../services/TrainingService';
// import TopNavigation from './../TopNavigation/index'

var trainingService = new TrainingService();
export default {
  name: 'trainingClass',
  components: {
    // TopNavigation
  },
  props: [],
  data () {
    return {

      training: null,
      trainingMembers: null,
      coachlist: null,
      classlist: null,
      curuser: this.$route.params.userId,
      trainingId: null,
      personId: null
    }
  },
  computed: {

  },
  mounted () {
    this.getCurrentTraining();
    this.getClassList();
  },
  methods: {

    getCurrentTraining() {
      trainingService.getTraningById(this.$route.params.appId).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data != "") {
            this.training = response.data;
            this.coachlist = this.training.coaches;
            this.classlist = this.training.participatedAthletes;
          }else{
            //TODO SHOW ERROR AND REDIRECT USERS BACK TO /MEETS
            console.error(response);
          }
        }else{
          //TODO SHOW ERROR AND REDIRECT USERS BACK TO /MEETS
          console.error(response);
        }
      });
    },

    deleteparticipant(trainingid, athleteid){
      this.trainingId = trainingid;
      this.personId = athleteid;
      trainingService.deleteAttendee(this.trainingId, this.personId).then(response => {
        if(response.status == 200) { 
          if(response.data != null) {
            //succesfully create noti
            console.error(response.data);
          }
          }else{
            //error
            console.error(response);
            alert('failed to delete user: ');
          }
      });
      
    }
    

  }
}


