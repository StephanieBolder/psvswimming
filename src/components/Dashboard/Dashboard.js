// import TopNavigation from './../TopNavigation/index'
import UserService from './../../services/UserService'

var userService = new UserService();

export default {
  name: 'dashboard',
  components: {
    // TopNavigation
  },
  props: [],
  data () {
    return {
        //creation of mock data for the single news item pages

        articles: [
          {
            id: 1,
            name: "KNZB ends all running competitions due to coronavirus.",
            image: "",
            preview: "Following the measures that RIVM and the Cabinet had to take as a result of the corona crisis, the KNZB has decided to stop all competitions of the 2019/2020 season.",
            text: "Following the measures that RIVM and the Cabinet had to take as a result of the corona crisis, the KNZB has decided to stop all competitions of the 2019/2020 season. This decision applies to all levels of jumping, synchronized swimming, water basketball, water polo and competitive swimming. The corona virus and its consequences for Dutch society also have a major impact on swimming. Swimming pools are closed and club life has come to a halt. There is no longer a normal training regimen for both top athletes and those who are active as athletes at other levels. Exactly what this decision means for the different sports will be further elaborated in the next two weeks. Contributions will be collected on sports technical, organizational and financial aspects and a balanced decision will be made. The Federal Bureau will contact the regional committees, the various task and working groups and its associations. Before Easter, it will be clear for every swimming discipline what the consequences of the corona virus will be for the start of the 2020/2021 season. In order to remain fit in the coming weeks, various top athletes and trainers give daily tips via the various social media channels. With this we hope to contribute to the fitness of all Dutch people",
            // author: "PSV Zwemmen",
            Headliner: false
          },
          {
            id: 2,
            name: "Swimming pool through the mud after secret training: 'We crossed the line'",
            image: "",
            preview: "In April, the Dutch swimming federation (KNZB) secretly used its own swimming pool in Zeist - back then against the guidelines - for training swimmers.",
            text: "In April, the Dutch swimming federation (KNZB) secretly used its own swimming pool in Zeist - back then against the guidelines - for training swimmers. After sports dome NOC * NSF reacted furiously, technical director André Cats has to do some damage control on behalf of the KNZB. We have crossed the border, said Cats Sunday evening at Studio Sport. Every relationship is sometimes scratched, we will have to work hard to remove it. 'Water feeling'. According to Cats, the swimming federation made a big mistake. The KNZB had already been slapped on the wrist in March when an alternative training camp was set up in Drachten. The Olympic Games had not been postponed to 2021 at the time of that pool use. When swimming, feeling water is very important. At that time we still felt the urgency of the Games, said Cats.",
            // author: "PSV Zwemmen",
            Headliner: true
          },
          {
            id: 3,
            name: "KNZB and Johan Cruyff Institute join forces with partnership.",
            image: "",
            preview: "The KNZB and the Johan Cruyff Institute have officially become cooperation partners by signing a cooperation agreement in the field of education.",
            text: "The KNZB and the Johan Cruyff Institute have officially become cooperation partners by signing a cooperation agreement in the field of education. The Johan Cruyff Institute and the Royal Dutch Swimming Federation, the KNZB, have signed a cooperation agreement to strengthen each other academically and to contribute to the practical orientation of training courses for professionals in sports. Among other things, the agreement offers special benefits to the union's employees and athletes, who receive discounts of up to 20% on academic programs in sports management, sports marketing and sponsorship, football business and coaching offered by the Johan Cruyff Institute, including: aim to promote the development of their professional careers. The KNZB and the Johan Cruyff Institute will continue to work together on special study cases, guest lectures, internships and the organization of joint educational activities. The KNZB, one of the larger sports federations in the Netherlands, has been committed to promoting swimming in the Netherlands for 125 years. The association focuses on the full width: swimming, water polo, synchronized swimming and jumping clean. KNZB athletes who have studied at the Johan Cruyff Institute in the past include Inge Dekker, Femke Heemskerk, Sebastiaan Verschuren and Dagmar Genee.",
            // author: "PSV Zwemmen",
            Headliner: false
          },
        ],
        activeUser: null
    }
  },
  computed: {

  },
  mounted () {
    userService.getUserById(this.$route.params.userId).then(userResponse => {
      if(userResponse.status == 200) {
        if(userResponse.data != null && userResponse.data != "") {
          this.activeUser = userResponse.data;
        }else{
          console.error(userResponse);
        }
      }else{
        console.error(userResponse);
      }
    });
  },
  methods: {

  }
}


