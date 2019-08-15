import { post } from 'axios'

import { STORAGE_ID, API_URL, NEXT_SERVER_API_KEY } from 'config'

const api = (data, done) => {
  const locale = localStorage.getItem(`${STORAGE_ID}_locale`)
  data['key'] = NEXT_SERVER_API_KEY
  data['locale'] = locale || 'en'

  post(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      done(null, data)
    })
    .catch((err) => {
      done({ error: err.message })
    })
}

export default api
