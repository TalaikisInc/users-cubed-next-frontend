import { post } from 'axios'

import { API_URL, NEXT_SERVER_API_KEY, STORAGE_ID } from 'config'

const secureApi = (token, data, done) => {
  const locale = localStorage.getItem(`${STORAGE_ID}_locale`)
  data['key'] = NEXT_SERVER_API_KEY
  data['locale'] = locale || 'en'

  post(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
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

export default secureApi
