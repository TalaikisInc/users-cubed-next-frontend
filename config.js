export const PROD = true
export const DEBUG = !PROD

export const STORAGE_ID = 'test'
export const URL = PROD ? 'https://cubed.talaikis.com' : 'http://127.0.0.1:3000' // w/o trailing slash
export const IMAGES_URL = 'https://cubed.talaikis.com/public/images/'
export const API_URL = PROD ? 'https://ucapi.talaikis.com' : 'http://localhost:3001'
export const COMPANY_EMAIL = 'info@talaikis.com'
export const DEFAULT_DESCRIPTION = 'The Company'
export const TITLE = 'The Company'
export const COMPANY = 'Company Ltd.'
export const COMPANY_ADDRESS = ''
export const DPM_EMAIL = 'privacy@talaikis.com'
export const DEFAULT_IMAGE = 'default.jpg'

export const UPLOAD_API_URL = PROD ? 'https://test.test.com/' : 'http://localhost:3000/upload'
export const CONTACT_API_URL = PROD ? 'https://test.test.com/contactus' : 'http://localhost:3000/contactus'
export const NEXT_SERVER_API_KEY = 'cEPHDFKxwxaL7cAVZFQt'
export const NEXT_SERVER_UPLOAD_API_KEY = 'test'
export const NEXT_SERVER_CONTACT_API_KEY = 'test='

export const TWITTER_HANDLE = '@Company'
export const FB_SITE = ''
export const FB_APP_ID = ''
export const GOOGLE_PUB = 'ca-pub-2578395398126606'
export const GA_TRACKING_ID = ''
export const MAILCHIMP_URL = '//test.us20.list-manage.com/subscribe/post?u=5ea992bbc4e0800a29285e40f&amp;id=01d94ffd12'
export const DEFAULT_OG_TYPE = 'company'

export const UPDATE_FREQUENCY = '3 hours'
export const PAGE_COUNT = 100

export const DESCRIPTIONS = {
  homepage: `${TITLE}'s homepage.`,
  about: `${TITLE}'s about page.`,
  signin: `${TITLE}'s signin page.`,
  signup: `${TITLE}'s signup page.`,
  signedOut: `${TITLE}'s signed out page.`,
  disclaimer: `${TITLE}'s disclaimers page.`,
  ToS: `${TITLE}'s Terms and Conditions page`,
  privacyPolicy: `${TITLE}'s Privacy policy page`,
  confirm: `${TITLE}'s account confirmation page`,
  reset: `${TITLE}'s password reset page.`,
  contactUs: `${TITLE}'s contact us page.`,
  confirmreset: `${TITLE}'s password reset confirmation page.`,
  profile: {
    deleted: `${TITLE}'s profile deleted page.`
  },
  search: 'Search Results',
  refer: 'Refer users.'
}

export const SOCIAL = {
  fb: {
    url: 'https://www.facebook.com'
  },
  twitter: {
    url: 'https://www.twitter.com'
  },
  instagram: {
    url: 'https://www.instagram.com'
  },
  google: {
    url: 'https://www.google.com'
  }
}

export const LOGO_ALT = 'Users Cubed'

export const ADSENSE_SLOTS = {
}
