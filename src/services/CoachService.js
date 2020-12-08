import Axios from "axios";

export default class CoachService {
  getCoachById(userId) {
    return Axios.get("/coach/" + userId);
  }

  getAthletesByCoach(userId) {
    return Axios.get(`/coach/user/${userId}/athletes`);
  }
}
