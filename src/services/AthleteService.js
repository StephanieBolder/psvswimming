import Axios from "axios"

export default class AthleteService {

    getAthleteById(athleteId) {
        return Axios.get('/athlete/' + athleteId);
    }

    getEventParticipationsFromAthlete(athleteId) {
        return Axios.get('/athlete/' + athleteId + "/eventParticipations");
    }

    getEventRequestsFromAthlete(athleteId) {
        return Axios.get('/athlete/' + athleteId + "/eventRequests");
    }

}
