// import TopNavigation from './../TopNavigation/index'

export default {
  name: 'meets-register',
  components: { },
  props: [],
  data () {
    return {
      search: '',
      filter: {},
      sortDesc: false,
      sortBy: 'date',
      keys: ['Name','Date','Style','Distance'],
      items: [
        {
          name: 'Swim Cup Eindhoven',
          style: "backstroke",
          distance: "200m",
          date: "12 may 2020"
        },
        {
          name: 'Open Dutch Championships',
          style: "butterfly stroke",
          distance: "100m",
          date: "26 may 2020"
        },
        {
          name: 'Dutch Master Championships',
          style: "breaststroke",
          distance: "50m",
          date: "19 may 2020"
        },
      ],
    }
  },
  computed: {
    filteredKeys () {
      return this.keys.filter(key => key !== "Name")
    },
  },
  methods: {
  },
}


