import UserService from './../../services/UserService'
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import Training from "./Training.vue";
import Agenda from "./Agenda.vue";
import Statistics from "./Statistics.vue";
import Dropdown from "../shared/Dropdown.vue";
import TopNavRight from "../shared/TopNavRight.vue";

var userService = new UserService();

export default {
  name: 'profile',
  components: {
    TopNavRight,
    VueTabs,
    VTab,
    Training,
    Agenda,
    Statistics,
    Dropdown,
  },
  props: [],
  data () {
    return {
      users: [
        { id: 1, firstname: "John", lastname: "Doe" },
      ],
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


