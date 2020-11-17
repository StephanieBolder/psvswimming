import TopNavigation from '../TopNavigation'
import UserService from "../../services/UserService";
import {showMessage} from "../../util/modal";

const userService = new UserService();

export default {
  name: 'user-register',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      loading: false,
      membershipInput: '',
      emailInput: '',
      emailRules: [ v => /.+@.+/.test(v) || 'Invalid Email address' ],
      firstNameInput: '',
      lastNameInput: '',
      nameRules: [ v => v && v.length > 1 || 'Invalid name' ],
      userTypes: ['Swimmer', 'Coach'],
      selectedUserType: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    register(){
      this.loading = true;

      userService.postUser(this.firstNameInput, this.lastNameInput, this.emailInput, this.selectedUserType, this.membershipInput)
          .then(() => showMessage("User created"))
          .then(() => this.loading = false);
    }
  }
}


