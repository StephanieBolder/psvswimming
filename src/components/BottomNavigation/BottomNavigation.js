import UserService from './../../services/UserService';
import AuthService from './../../services/AuthService'

var userService = new UserService();
var authService = new AuthService();

export default {
  name: 'bottom-navigation',
  components: {},
  props: [],
  data () {
    return {
      activeUser: null
    }
  },
  computed: {

  },
  mounted () {
    if(this.$route.params.userId == undefined) {
      authService.isAuthorized().then(authorized => {
        if(authorized.data != null) {
          this.$route.params["userId"] = authorized.data;
        }
        userService.getUserById(this.$route.params.userId).then(userResponse => {
          if(userResponse.status == 200) {
            if(userResponse.data != null && userResponse.data != "") {
              console.warn(userResponse.data);
              this.activeUser = userResponse.data;
            }else{
              console.error(userResponse);
            }
          }else{
            console.error(userResponse);
          }
        });
      });
    }else{
      userService.getUserById(this.$route.params.userId).then(userResponse => {
        if(userResponse.status == 200) {
          if(userResponse.data != null && userResponse.data != "") {
            this.activeUser = userResponse.data;
          }else{
            console.error(userResponse);
          }
        }else{
          console.error(userResponse);
        }
      });
    }
  },
  methods: {

  }
}


