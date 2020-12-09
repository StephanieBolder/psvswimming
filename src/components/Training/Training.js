import TrainingService from '../../services/TrainingService'
import UserService from '../../services/UserService'
// import TopNavigation from './../TopNavigation/index'

var trainingService = new TrainingService();
var userService = new UserService();

export default {
  name: 'training',
  components: {
    // TopNavigation
  },
  props: [],
  data () {
    return {

      allTraining: null,
      perstraining: null,
      requestList: null,
      currUser: this.$route.params.userId,
      athleteId: null

    }
  },
  computed: {

  },
  mounted () {

    this.getAlltraining();
    userService.getUserById(this.$route.params.userId).then(userResponse => {
      if(userResponse.status == 200) {
        if(userResponse.data != null && userResponse.data !== "") {
          userService.getCurrentUserRoleData().then(roleDataResponse => {
            if(roleDataResponse.status == 200) {
              if(roleDataResponse.data != null && roleDataResponse.data !== "") {
                //CHECK IF USER IS SWIMMER
                this.athleteId = roleDataResponse.data.appId;

                //getting the list after you get the user id
                
                    trainingService.getTrainingRequests(this.athleteId).then(response =>{
                      if(response.status == 200) {
                        if(response.data != null && response.data != "") {
                          this.requestList = response.data;
                        }else{
                          console.error(response);
                        }
                      }else{
                        console.error(response);
                      }
                    });

                ////
              }
            }
          })
        }else{
          console.error(userResponse);
        }
      }else{
        console.error(userResponse);
      }
    });

  },
  methods: {
     getAlltraining(){
      trainingService.getAllTraining().then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data != "") {
            this.allTraining = response.data;
          }else{
            console.error(response);
          }
        }else{
          console.error(response);
        }
      });
     },


     approveRequest(trainingid,athleteid){
        trainingService.setAthletetoPresent(trainingid, athleteid).then(response =>{
          if(response.status == 200) {
            if(response.data != null && response.data != "") {
              window.alert("Approved");
              location.reload();
            }else{
              console.error(response);
            }
          }else{
            console.error(response);
          }
        })
     },

     deleteRequest(trainingid, athleteid){
      trainingService.removeAthleteRequest(trainingid, athleteid).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data != "") {
            window.alert("deleted");
            location.reload();
          }else{
            console.error(response);
          }
        }else{
          console.error(response);
        }
      })
     }
  }
}


