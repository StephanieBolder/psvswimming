import TopNavigation from './../TopNavigation/index'
import UserService from './../../services/UserService'

var userService = new UserService();

export default {
  name: 'profile',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      user: null
    }
  },
  computed: {

  },
  mounted () {
    userService.getUserById(this.$route.params.userId).then(userResponse => {
      if(userResponse.status == 200) {
        if(userResponse.data != null && userResponse.data !== "") {
          this.user = userResponse.data;
        }
      }
    })
  },
  methods: {

  }
}


