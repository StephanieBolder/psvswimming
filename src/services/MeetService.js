import Axios from "axios"

export default class MeetService {

    getMeetById(meetId) {
        return Axios.get('/meet/' + meetId);
    }

    getAllMeets() {
        return Axios.get('/meet');
    }
 
    getMeetsWithEventRequestsFromAthlete(athleteId) {
        return Axios.get('/meet/requests/' + athleteId);
    }

    getMeetsWithParticipatedEventsFromAthlete(athleteId) {
        return Axios.get('/meet/participation/' + athleteId);
    }
    
}