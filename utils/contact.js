import { post } from 'axios'

import { CONTACT_API_URL, STORAGE_ID, NEXT_SERVER_CONTACT_API_KEY } from 'config'

const contactApi = (name, email, message, done) => {
  const locale = localStorage.getItem(`${STORAGE_ID}_locale`) || 'en'
  console.log('CONTACT_API_URL')
  console.log(CONTACT_API_URL)

  post(CONTACT_API_URL, {
    method: 'POST',
    msg: message,
    key: NEXT_SERVER_CONTACT_API_KEY,
    locale,
    name,
    email,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((data) => {
      done(null, data.data)
    })
    .catch((err) => {
      done({ error: err.message })
    })
}

export default contactApi
