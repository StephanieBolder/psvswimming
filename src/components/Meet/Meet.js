// import TopNavigation from '../TopNavigation'
import MeetService from '../../services/MeetService'
import UserService from '../../services/UserService'
import EventService from '../../services/EventService'

var meetService = new MeetService();
var userService = new UserService();
var eventService = new EventService();


export default {
  name: 'meet',
  components: {
    // TopNavigation
  },
  props: [],
  data () {
    return {
      meet: null,
      athleteId: null
    }
  },
  computed: {

  },
  mounted () {
    this.getCurrentMeet();
    userService.getUserById(this.$route.params.userId).then(userResponse => {
      if(userResponse.status == 200) {
        if(userResponse.data != null && userResponse.data !== "") {
          userService.getCurrentUserRoleData().then(roleDataResponse => {
            if(roleDataResponse.status == 200) {
              if(roleDataResponse.data != null && roleDataResponse.data !== "") {
                //CHECK IF USER IS SWIMMER
                this.athleteId = roleDataResponse.data.appId;
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
    addAthleteToEventRequests(athleteId, eventId) {
      eventService.addAthleteToEventRequests(athleteId, eventId).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data !== "") {
            this.getCurrentMeet();
          }
        }
      });
    },removeAthleteFromEventRequests(athleteId, eventId) {
      eventService.removeAthleteFromEventRequests(athleteId, eventId).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data !== "") {
            this.getCurrentMeet();
          }
        }
      });
    },
    addAthleteToEventParticipants(athleteId, eventId) {
      eventService.addAthleteToEventParticipants(athleteId, eventId).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data !== "") {
            this.getCurrentMeet();
          }
        }
      });
    },
    removeAthleteFromEventParticipants(athleteId, eventId) {
      eventService.removeAthleteFromEventParticipants(athleteId, eventId).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data !== "") {
            this.getCurrentMeet();
          }
        }
      });
    },
    getCurrentMeet() {
      meetService.getMeetById(this.$route.params.meetId).then(response => {
        if(response.status == 200) {
          if(response.data != null && response.data != "") {
            this.meet = response.data;
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
}


