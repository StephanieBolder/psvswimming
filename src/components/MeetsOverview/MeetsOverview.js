import MeetService from './../../services/MeetService';

// import TopNavigation from './../TopNavigation/index'
import AthleteParticipatedEvents from './../AthleteParticipatedEvents/index'
import AthleteRequestedEvents from './../AthleteRequestedEvents/index'
import AthleteApprovedEvents from "../AthleteApprovedEvents/index";

var meetService = new MeetService();

export default {
  name: 'meets-overview',
  components: {
    // TopNavigation,
    AthleteParticipatedEvents,
    AthleteRequestedEvents,
    AthleteApprovedEvents
  },
  props: [],
  data () {
    return {
      items: [],
      search: '',
      filter: {},
      sortDesc: false,
      sortBy: 'date',
      keys: ['Name','Date','Style','Distance'],
    }
  },
  computed: {
    filteredKeys () {
      return this.keys.filter(key => key !== "Name")
    }
  },
  mounted () {
    meetService.getAllMeets().then(response => {
      console.warn(response);
      if(response.status == 200) {
        if(response.data != null && response.data !== "") {
          this.items = response.data;
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
    getAllMeets() {
      meetService.getAllMeets().then(response => {
        console.warn(response.data);
      })
    },
    getMeetById(meetId) {
      meetService.getMeetById(meetId).then(response => {
        console.warn(response.data);
      }); 
    }
  }
}


