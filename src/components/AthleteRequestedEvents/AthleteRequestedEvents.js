import EventService from '../../services/EventService';
import UserService from '../../services/UserService';
import MeetService from '../../services/MeetService';
import TopNavigation from './../TopNavigation/index'

var eventService = new EventService();
var userService = new UserService();
var meetService = new MeetService();

export default {
  name: 'athlete-requested-events',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      pendingMeets: null,
      approvedMeets: null,
      athleteId: null
    }
  },
  computed: {

  },
  mounted () {
    userService.getUserById(this.$route.params.userId).then(userResponse => {
      if(userResponse.status == 200) {
        if(userResponse.data != null && userResponse.data !== "") {
          userService.getCurrentUserRoleData().then(roleDataResponse => {
            if(roleDataResponse.status == 200) {
              if(roleDataResponse.data != null && roleDataResponse.data !== "") {
                //CHECK IF USER IS SWIMMER
                this.athleteId = roleDataResponse.data.appId;
                this.getPendingEventRequestsFromAthlete(this.athleteId);
                this.getApprovedEventRequestsFromAthlete(this.athleteId);
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
    invokeRequestForEvent(eventId) {
      userService.getUserById(this.$route.params.userId).then(userResponse => {
        if(userResponse.status == 200) {
          if(userResponse.data != null && userResponse.data != "") {
            userService.getCurrentUserRoleData().then(roleDataResponse => {
              if(roleDataResponse.status == 200) {
                if(roleDataResponse.data != null && roleDataResponse.data !== "") {
                  eventService.removeAthleteFromEventRequests(roleDataResponse.data.appId, eventId).then(eventResponse => {
                    if(eventResponse.status == 200) {
                      if(eventResponse.data != null && eventResponse.data != "") {
                        this.getEventRequestsFromAthlete(roleDataResponse.data.appId);
                      }else{
                        console.error(eventResponse);
                      }
                    }else{
                      console.error(eventResponse);
                    }
                  });                
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
    getPendingEventRequestsFromAthlete(athleteId) {
       meetService.getMeetsWithEventRequestsFromAthlete(athleteId).then(meetsResponse => {
          if(meetsResponse.status == 200) {
            if(meetsResponse.data != null && meetsResponse.data != "") {
              this.pendingMeets = meetsResponse.data;
            }else{
              this.pendingMeets = [];
            }
          }else{
            console.error(meetsResponse);
          }
       })
    },
    getApprovedEventRequestsFromAthlete(athleteId) {
      meetService.getMeetsWithParticipatedEventsFromAthlete(athleteId).then(meetsResponse => {
         if(meetsResponse.status == 200) {
           if(meetsResponse.data != null && meetsResponse.data != "") {
             this.approvedMeets = meetsResponse.data;
           }else{
             this.approvedMeets = [];
           }
         }else{
           console.error(meetsResponse);
         }
      })
   },
   removeAthleteFromEventRequests(athleteId, eventId) {
    eventService.removeAthleteFromEventRequests(athleteId, eventId).then(response => {
      if(response.status == 200) {
        if(response.data != null && response.data !== "") {
          this.getPendingEventRequestsFromAthlete(this.athleteId);
        }
      }
    });
  },
  removeAthleteFromEventParticipants(athleteId, eventId) {
    eventService.removeAthleteFromEventParticipants(athleteId, eventId).then(response => {
      if(response.status == 200) {
        if(response.data != null && response.data !== "") {
          this.getApprovedEventRequestsFromAthlete(this.athleteId);
        }
      }
    });
  },
  }
}