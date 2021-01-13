import AuthService from "../../services/AuthService";
import router from "./../../router/index";

var authService = new authService();

export default {
  name: "login-input",
  components: {},
  props: [],
  data() {
    return {
      emailInput: "swimmer@psv.nl",
      passwordInput: "KDaJpSGN",
      emailRules: [(v) => /.+@.+/.test(v) || "Invalid Email address"],zz
    };
  },
  computed: {},
  mounted() {},
  methods: {
    authenticate() {
      authService
        .authenticate(this.emailInput, this.passwordInput)
        .then((response) => {
          const { id, username, email, role } = response.data;
          localStorage.setItem("access_token", response.data.token);
          localStorage.setItem("id", id);
          this.$store.commit("setUser", { id, username, email, role });
          router.push("/");
        });
    },
  },
};
