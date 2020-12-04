import Axios from "axios";

export default class EventService {
  getAllEligibleEventsForCurrentUser() {
    return Axios.get("/event");
  }

  getEventById(eventId) {
    return Axios.get("/event/" + eventId);
  }

  getAllEventsWhereAthleteIsParticipating(athleteId) {
    return Axios.get(`/event/athlete/${athleteId}/participating`);
  }

  addAthleteToEventPendingRequests(athleteId, eventId) {
    return Axios.post(`/event/request/${eventId}/athlete/${athleteId}`);
  }

  removeAthleteFromEventPendingRequests(athleteId, eventId) {
    return Axios.delete(`/event/request/${eventId}/athlete/${athleteId}`);
  }

  addAthleteToEventParticipants(athleteId, eventId) {
    return Axios.post(`/event/approve/${eventId}/athlete/${athleteId}`);
  }

  removeAthleteFromEventParticipants(athleteId, eventId) {
    return Axios.delete(`/event/reject/${eventId}/athlete/${athleteId}`);
  }
}
