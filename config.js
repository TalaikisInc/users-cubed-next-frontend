// Environment
export const PROD = process.env.NODE_ENV
export const DEBUG = !PROD
export const STORAGE_ID = process.env.STORAGE_ID
export const API_KEY = process.env.API_KEY
export const API_URL = process.env.API_URL
const STRIPE_STATUS = 'development'
export const MODULES = {
  ADSENSE: false,
  GOOGLE_ANALYTICS: false,
  SOCIAL: true
}
export const THEME = 'default'

// Company properties
export const FRONTEND_URL = process.env.FRONTEND_URL
export const IMAGES_URL = `${FRONTEND_URL}/public/images/`
export const COMPANY_EMAIL = 'info@talaikis.com'
export const DEFAULT_DESCRIPTION = 'The Company'
export const TITLE = 'The Company'
export const COMPANY = 'Company Ltd.'
export const COMPANY_ADDRESS = ''
export const DPM_EMAIL = 'privacy@talaikis.com'
export const DEFAULT_IMAGE = 'default.jpg'
export const LOGO_ALT = 'Users Cubed'
export const DEFAULT_OG_TYPE = 'company'
export const UPDATE_FREQUENCY = '3 hours'
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
    url: 'https://www.facebook.com',
    title: `${COMPANY} @Facebook`
  },
  twitter: {
    url: 'https://www.twitter.com',
    title: `${COMPANY} @Twitter`
  },
  instagram: {
    url: 'https://www.instagram.com',
    title: `${COMPANY} @Instagram`
  },
  linkedin: {
    url: 'https://www.linkedin.com',
    title: `${COMPANY} @LinkedIn`
  }
}
export const CURRENCY_SYMBOL = '$'

// Third parties
export const TWITTER_HANDLE = '@Company'
export const FB_SITE = ''
export const FB_APP_ID = ''
export const GOOGLE_ADSENSE_ID = process.env.GOOGLE_ADSENSE_ID
export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID
export const MAILCHIMP_URL = process.env.MAILCHIMP_URL
export const ADSENSE_SLOTS = {
}
export const IPDATA_KEY = '' // http://ipdata.co
export const OEXCHANGE_KEY = '' // https://openexchangerates.org

export const AUTH0_CLIENTID = process.env.AUTH0_CLIENTID
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN
export const AUTH0_REDIRECTURI = process.env.AUTH0_REDIRECTURI

export const STRIPE_KEY = STRIPE_STATUS === 'development' ? process.env.STRIPE_TEST_KEY : process.env.STRIPE_LIVE_KEY
