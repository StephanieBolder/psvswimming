import TopNavigation from '../TopNavigation'
import UserService from '../../services/UserService'
import AthleteService from '../../services/AthleteService'
import MeetService from '../../services/MeetService';
import EventService from '../../services/EventService'

var userService = new UserService();
var eventService = new EventService();
var athleteService = new AthleteService();
var meetService = new MeetService();

export default {
  name: 'event-requests-overview',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      pendingMeets: null,
      athleteId: null,
      athlete: null,
      activeCoach: null,
      swimmers: []
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
                //CHECK IF USER IS COACH
                this.activeCoach = roleDataResponse.data;
                this.activeCoach.athleteList.forEach(athleteId => {
                  athleteService.getAthleteById(athleteId).then(athleteResponse => {
                    if(athleteResponse.status == 200) {
                      if(athleteResponse.data != null && athleteResponse.data !== "") {
                        this.swimmers.push(athleteResponse.data);
                      }
                    }
                  })
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
  methods: {
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
   approveAthleteParticipationToEvent(athleteId, eventId) {
    eventService.removeAthleteFromEventRequests(athleteId, eventId).then(eventResponse => {
      if(eventResponse.status == 200) {
        if(eventResponse.data != null && eventResponse.data !== "") {
          eventService.addAthleteToEventParticipants(athleteId, eventId).then(eventAddResponse => {
            if(eventAddResponse.status == 200) {
              if(eventAddResponse.data != null && eventAddResponse.data !== "") {
                this.getPendingEventRequestsFromAthlete(athleteId);
              }
            }
          })
        }
      }
    })
   },
   rejectAthleteParticipationToEvent(athleteId, eventId) {
    eventService.removeAthleteFromEventRequests(athleteId, eventId).then(eventResponse => {
      if(eventResponse.status == 200) {
        if(eventResponse.data != null && eventResponse.data !== "") {
          this.getPendingEventRequestsFromAthlete(athleteId);
        }
      }
    })
  }
  },
  watch: {
    athleteId: function() {
      athleteService.getAthleteById(this.athleteId).then(athleteResponse => {
        if(athleteResponse.status == 200) {
          if(athleteResponse.data != null && athleteResponse.data !== "") {
            this.athlete = athleteResponse.data;
            meetService.getMeetsWithEventRequestsFromAthlete(this.athlete.appId).then(meetResponse => {
              if(meetResponse.status == 200) {
                if(meetResponse.data != null && meetResponse.data !== "") {
                  this.pendingMeets = meetResponse.data;
                }
              }
            })
          }
        }
      })
    }
  }
}


