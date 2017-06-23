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
    let params = { query: '', page: 0, perPage: 25 }
    Object.assign(params, parameters)

    return axios.get(this.buildUrl('gifs/search'), {
      params: {
        api_key: this.apiKey,
        q: params.query,
        limit: params.perPage,
        offset: params.page * params.perPage
      }
    }).then((response) => {
      response.params = params
      return response
    })
  }

  buildUrl(path) {
    return `http://api.giphy.com/v1/${path}`
  }
}
