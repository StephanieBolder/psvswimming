import AthleteService from './../../services/AthleteService';
import TopNavigation from './../TopNavigation'

var athleteService = new AthleteService();

export default {
  name: 'athlete-participated-events',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      participatedEvents: null
    }
  },
  computed: {

  },
  mounted () {
    athleteService.getEventParticipationsFromAthlete(this.$route.params.userId).then(response => {
      if(response.status == 200) {
        if(response.data != null && response.data != "") {
          this.participatedEvents = response.data;
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
  methods: {

  }
}


