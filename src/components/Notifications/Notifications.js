import NotificationService from '../../services/NotificationService';
import TopNavigation from './../TopNavigation/index'

var notificationService = new NotificationService();

export default {
  name: 'notifications',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      notifications: null,
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


