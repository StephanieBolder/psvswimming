import NotificationService from '../../services/NotificationService';
import TopNavigation from './../TopNavigation/index'

var notificationService = new NotificationService();

export default {
  name: 'notificationsoverview',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      notifications: null,
      allNotification:null,
    }
  },
  computed: {

  },
  mounted () {
    notificationService.getNotificationByUserId(this.$route.params.userId).then(response => {
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
    
    notificationService.getAllNotifications().then(response => {
      if(response.status == 200) {
        if(response.data != null && response.data != "") {
          this.allNotification = response.data;
        }else{
          console.error(response);
        }
      }else{
        console.error(response);
      }
    });
  },
  methods: {
  }
}


