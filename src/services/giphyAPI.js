import axios from 'axios'

export default class GiphyAPI {
    get apiKey() { return 'e7df5f68c7534d93ba036cbeaa440bdf' }

    getTrending() {
        return axios.get(this.buildUrl('gifs/trending'), { 
            params: {
                api_key: this.apiKey
            }
        })
    }

    search(query) {
        return axios.get(this.buildUrl('gifs/search'), { 
            params: {
                api_key: this.apiKey,
                q: query
            }
        })
    }

    buildUrl(path) { 
        return `http://api.giphy.com/v1/${path}` 
    }
}