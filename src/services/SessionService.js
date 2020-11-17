import Axios from "axios"

export default class SessionService {

    getSessionById(sessionId) {
        return Axios.get('/session/' + sessionId);
    }

    getSessionsFromMeet(meetId) {
        return Axios.get('/session/meet/' + meetId);
    }
    
}