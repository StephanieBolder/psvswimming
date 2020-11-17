import Axios from "axios";

export default class TrainingService{

    getAllTraining(){
        return Axios.get('/training');
    }

    getTraningById(trainingid){
        return Axios.get('/training/'+ trainingid);
    }

    getMyTraining(userid){
        return Axios.get('/training/althete/'+userid);
    }

    getTrainingRequests(athleteid){
        return Axios.get('/training/requests/athlete/'+athleteid);
    }

    deleteAttendee(trainingid, athleteid){
        return Axios.delete('/training/'+trainingid+'/attendees/athlete/'+athleteid);
    }

    setAthletetoPresent(trainingId, athleteId){
        return Axios.put('/training/'+trainingId+'/athlete/'+athleteId+"/true");
    }

    removeAthleteRequest(trainingId, athleteId){
        return Axios.delete('http://localhost/training/'+trainingId+'/requests/athlete/'+athleteId)
    }

    postTrainingClass(appId, tname, tdescription, tsdt, tedt, coaches, rathletes, pathletes, location){
        return Axios.post('http://localhost/training',{
            appId: appId,
            name: tname,
            description : tdescription,
            startDateTime : tsdt,
            endDateTime : tedt,
            coaches: coaches,
            requestedAthletes: rathletes,
            participatedAthletes : pathletes,
            location: location
        });
    }
    
}