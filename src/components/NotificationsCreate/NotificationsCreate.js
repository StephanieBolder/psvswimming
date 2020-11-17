import NotificationService from '../../services/NotificationService';
import TopNavigation from './../TopNavigation/index'
import UserService from '../../services/UserService';

var userService = new UserService();
var notificationService = new NotificationService();

export default {
  name: 'notificationsCreate',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      appIdInput: 10,
      Coaches: [],
      Swimmers: [],
      sendSwimmers:[],
      sendCoaches:[],
      sendAll: [],
      receiverIds: [],
      titleInput: '',
      messageInput:'',
      receivedUserIdInput: [],
      dateTime: new Date().toLocaleString()
    }
  },
  computed: {

  },
  mounted () {
   //Get all coaches id by their role
   userService.getUsersByRole('COACH').then(response => {
    if(response.status == 200) {
      if(response.data != null && response.data != "") {
        this.Coaches = response.data;
        this.Coaches.forEach(a => this.sendCoaches.push(a.appId));
        this.Coaches.forEach(a => this.sendAll.push(a.appId));
      }else{
        console.error(response);
      }
    }else{
      console.error(response);
    }
  });

//Get all swimmers id by their role
userService.getUsersByRole('SWIMMER').then(response => {
  if(response.status == 200) {
      if(response.data != null && response.data != "") {
        this.Swimmers = response.data;
        this.Swimmers.forEach(a => this.sendSwimmers.push(a.appId));
        this.Swimmers.forEach(a => this.sendAll.push(a.appId));
      }else{
        console.error(response);
      }
    }else{
      console.error(response);
    }
  });
},
  methods: {
    //post notification, just work for posting global now because missing parameter
    postNotification(){
      this.checkReceiver();
      notificationService.postNotification(this.appIdInput, this.messageInput,this.titleInput,this.receiverIds, 'DIRECT_USER').then(response => {
        if(response.status == 200) { 
          if(response.data != null) {
            //succesfully create noti
            console.error(response.data);
            this.appIdInput +=1;
        }
        }else{
          //error
          console.error(response);
          alert('failed to push notification');
        }
      });
    },

    checkReceiver(){
      if(document.getElementById("sendCoaches").checked){
         this.receiverIds = this.sendCoaches;
         console.error(this.receiverIds);
      }
      else if(document.getElementById("sendSwimmers").checked){
         this.receiverIds = this.sendSwimmers;
         console.error(this.receiverIds);
      }
      else {
        this. receiverIds = this.sendAll;
        console.error(this.receiverIds);
      }
    }
   }
  }