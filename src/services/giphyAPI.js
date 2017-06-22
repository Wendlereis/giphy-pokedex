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

    search(parameters) {
        let defaultParameters = {
            query: '',
            page: 0,
            perPage: 10
        }

        let result = Object.assign({}, defaultParameters, parameters)

        return axios.get(this.buildUrl('gifs/search'), { 
            params: {
                api_key: this.apiKey,
                q: result.query,
                limit: result.perPage,
                offset: result.page * result.perPage
            }
        })
    }

    buildUrl(path) { 
        return `http://api.giphy.com/v1/${path}` 
    }
}