import TrainingService from '../../services/TrainingService';
// import TopNavigation from './../TopNavigation/index'

var trainingService = new TrainingService();
export default {
  name: 'trainingCreate',
  components: {
    // TopNavigation
  },
  props: [],
  data () {
    return {
      appId : null, 
      tname : null,
      tdescription : null,
      tsdt : [2020, 6, 5, 18, 52, 38, 817000000] , 
      tedt : [ 2020, 6, 5, 21, 52, 38, 822000000 ], 
      coaches : null, 
      rathletes : null, 
      pathletes :null,
      location  : { "latitude": 0, "longitude": 0 }
       
    }
  },
  computed: {

  },
  mounted () {

    
  },
  methods: {
    postTraining(){
      trainingService.postTrainingClass(this.appId,this.tname, this.tdescription, this.tsdt, this.tedt, this.coaches, this.rathletes, this.pathletes, this.location).then(response =>{
        if(response.status == 200) {
          if(response.data != null && response.data != "") {
            window.alert("post Succesful");
          }else{
            console.error(response);
          }
        }else{
          console.error(response);
        }
      })
    }

  }
}


