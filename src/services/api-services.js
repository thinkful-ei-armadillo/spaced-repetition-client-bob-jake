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
    )},

  getWord(){
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => 
    res.json()
    )},

    postGuess(guess){
      return fetch(`${config.API_ENDPOINT}/language/guess`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`,
          'content-type': 'application/json'
        }, 
          body: JSON.stringify({ guess })
        })
          .then(res => !res.ok ? res.json()
          .then(e => Promise.reject(e)) : res.json()
          )}
        
        }


export default ApiService;