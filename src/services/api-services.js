import config from '../config'
import TokenService from './token-service'


const ApiService = {
  

  getLanguage(){
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? TokenService.clearAuthToken()
        : res.json()
    )

    }
}

export default ApiService;