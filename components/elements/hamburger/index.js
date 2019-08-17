import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Hamburger extends Component {
  constructor (props) {
    super(props)
    this._openNav = this._openNav.bind(this)
  }

  _openNav () {
    const openmyslide = document.getElementById('mySidenav')
    if (openmyslide) {
      openmyslide.classList.add('open-side')
    }
  }

  render () {
    return (
      <div className="toggle-nav" onClick={this.openNav} role="button" tabIndex={0} onKeyPress={this.openNav}>
        <FontAwesomeIcon icon={faBars} size="2x" className="sidebar-bar" />
      </div>
    )
  }
}
