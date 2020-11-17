import Axios from "axios"

export default class AuthService {

    isAuthorized() {
      let promise = Axios.get('/authorize')
      .then(response => {
        return response;
      })
      .catch(() => {
        return null;
      })
      return promise;
    }

    authenticate(emailInput, passwordInput) {
        return Axios.post('/authenticate', {
          email: emailInput,
          password: passwordInput
        });
    }

}