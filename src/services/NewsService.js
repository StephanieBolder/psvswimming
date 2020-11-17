import Axios from "axios"

export default class NewsService {

    postNews(news) {
        // TODO: test
        return Axios.post('/news', { news });
    }
}
