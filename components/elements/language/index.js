import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { locales } from 'translations'
import { setLanguage } from 'store/actions'
import { getLocale } from 'store/selectors'

class SelectLanguage extends Component {
  constructor (props) {
    super(props)
    this._onChange = this._onChange.bind(this)
  }

  _onChange (e) {
    e.preventDefault()
    /*
    const { locale, location } = this.props
    const newLocale = e.target.value
    if (locales.includes(newLocale) && locale !== newLocale) {
      this.props.setLanguage(newLocale)
      const splt = location.pathname.split('/')
      const len = splt[splt.length - 1].length === 2
      const english = newLocale === 'en'
      const pathname = english ? `${location.pathname}`.replace(`/${locale}`, '') : (len ? `${location.pathname}`.replace(locale, newLocale) : `${location.pathname}/${newLocale}`)
      this.props.history.push({ pathname })
    }
    */
  }

  render () {
    const { locale } = this.props

    return (
      <div className="form-group">
        <select name='locale' value={locale} onBlur={this.onChange} onChange={this.onChange} className="form-control">
          <option value=""></option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  locale: getLocale(state)
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ setLanguage }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage)
