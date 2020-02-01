import React from 'react'
import jsonp from 'jsonp'
import isEmail from 'validator/lib/isEmail'

import { Submit } from 'components/primitives'
import Input from 'components/elements/forms/input'
import Message from 'components/elements/forms/message'
import { t } from 'translations'
import { MAILCHIMP_URL } from 'config'
import useStore from 'store'
const getAjaxUrl = (url) => url.replace('/post?', '/post-json?')

const Subscribe = () => {
  const [globalState, globalActions] = useStore()
  const _submit = (e) => {
    e.preventDefault()
    const { target } = e
    const email = target[0].value
    if (!isEmail(email)) {
      globalActions.setError(t('error.emailInvalid'))
      return
    }

    globalActions.setLoading(true)
    const url = `${getAjaxUrl(MAILCHIMP_URL)}&EMAIL=${encodeURIComponent(email)}`
    jsonp(url, { param: 'c' }, (err, data) => {
      if (err) {
        globalActions.setError(err)
      } else if (data.result !== 'success') {
        globalActions.setError(data.msg)
      } else {
        globalActions.setStatus(data.msg)
      }
    })
    globalActions.setLoading(false)
  }

  return (
    <div>
      { globalState.status ? <Message>{ globalState.status }</Message>
        : globalState.loading ? null : <form onSubmit={_submit}>
          <Input name="subEmail" type="email" autoComplete="email" placeholder={t('subscribe.placeholder')} />
          <Submit type="submit" center>{ t('subscribe.title') }</Submit>
        </form>
      }
    </div>
  )
}

export default Subscribe
