import AuthService from '../../services/AuthService'
import router from './../../router/index';

var authService = new AuthService();

export default {
  name: 'login-input',
  components: {},
  props: [],
  data () {
    return {
      emailInput: '',
      passwordInput: '',
      emailRules: [ v => /.+@.+/.test(v) || 'Invalid Email address' ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    authenticate() {
      authService.authenticate(this.emailInput, this.passwordInput).then(response => {
          localStorage.setItem("access_token", response.data);
          router.push("/");
      });
    }
  }
}


