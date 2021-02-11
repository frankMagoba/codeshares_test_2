import axios from 'axios'
import { apiBaseUrl } from '../../../environment/environment'

/**
 * Axios basic configuration
 */
const config = {
    baseURL: apiBaseUrl,
}

const LastFM = require('last-fm')
const lastfm = new LastFM(apiBaseUrl, { userAgent: 'MyApp/1.0.0 (http://example.com)' })
 
lastfm.trackSearch({ q: 'the greatest' }, (err, data) => {
  if (err) console.error(err)
  else console.log(data)
})

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need
 * to consume APIs from more than single server,
 */
const client = axios.create(config)



export default client
