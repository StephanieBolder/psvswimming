import Axios from "axios"

export default class EventService {

    getEventById(eventId) {
        return Axios.get('/event/' + eventId);
    }
    
    getEventsFromSession(sessionId) {
        return Axios.get('/event/session/' + sessionId);
    }

    addAthleteToEventRequests(athleteId, eventId) {
        return Axios.post('/event/request/' + eventId + "/athlete/" + athleteId);
    }

    removeAthleteFromEventRequests(athleteId, eventId) {
        return Axios.delete('/event/request/' + eventId + "/athlete/" + athleteId);
    }

    addAthleteToEventParticipants(athleteId, eventId) {
        return Axios.post('/event/approve/' + eventId + "/athlete/" + athleteId);
    }

    removeAthleteFromEventParticipants(athleteId, eventId) {
        return Axios.delete('/event/reject/' + eventId + "/athlete/" + athleteId);
    }
    
}