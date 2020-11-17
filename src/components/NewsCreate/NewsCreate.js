import TopNavigation from './../TopNavigation/index'
import NewsService from "../../services/NewsService";

const newsService = new NewsService();

export default {
  name: 'news-create',
  components: {
    TopNavigation
  },
  props: [],
  data () {
    return {
      news: { title: '', author: '', status: '', story: ''},
      items: ['Headliner', 'Important']
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    publishNews(){
      if(this.news.status){
        newsService.postNews(this.news).then(() => (console.log('Redirect here on success post')));
      }
    }
  }
}
