import Axios from "axios";

export default class CoachService {
  getCoachById(coachId) {
    return Axios.get("/coach/" + coachId);
  }

  getAthletesByCoach(userId) {
    return Axios.get(`/coach/user/${userId}/athletes`);
  }
}
