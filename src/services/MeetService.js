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

    createMeetFromLenexFile(file){
        const formData = new FormData()
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return Axios.post('/meet/lenex', formData, config)
    }

    addDeadlineToMeet(meetId, athleteDeadline, coachDeadline, athleteWithdrawDeadline){
        const data = {
            athleteDeadline: athleteDeadline,
            coachDeadline: coachDeadline,
            athleteWithdrawDeadline: athleteWithdrawDeadline
        }
        return Axios.put('/meet/' + meetId + '/deadlines', data)
    }
    
}