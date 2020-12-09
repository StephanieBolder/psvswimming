import NotificationService from '../../services/NotificationService';
import TopNavLeft from "../shared/TopNavLeft.vue";

var notificationService = new NotificationService();

export default {
  name: 'notifications',
  components: {
    TopNavLeft
  },
  props: [],
  data () {
    return {
      notifications: [{title: "Pictures of the PSV Swimmers", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.", date: "Yesterday"}, {title: "Pictures of the PSV Swimmers", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.", date: "01-12-2020"}, {title: "Pictures of the PSV Swimmers", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.", date: "Yesterday"}, {title: "Pictures of the PSV Swimmers", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.", date: "01-12-2020"}],
      currentItem: null
    }
  },
  computed: {

  },
  mounted () {

    notificationService.getNotificationById(this.$route.params.notificationId).then(response => {
      if(response.status == 200) {
        if(response.data != null && response.data != "") {
          this.notifications = response.data;
        }else{
          console.error(response);
        }
      }else{
        console.error(response);
      }
    });
  },

  //for mock data
  methods: {
    }

  }


