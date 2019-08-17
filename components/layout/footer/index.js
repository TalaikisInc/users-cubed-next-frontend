import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { isServer } from 'utils/utils'
import Subscribe from 'components/forms/subscribe'
import SocialLinks from 'components/elements/social-links'
import FooterCol from 'components/elements/footer-col'
import { LOGO_ALT, URL } from 'config'
import logo from 'static/logo.svg'
import Par from 'components/elements/par'

class CubedFooter extends Component {
  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    if (!isServer) {
      window.addEventListener('scroll', this.handleScroll)
      const contentwidth = window.innerWidth
      if ((contentwidth) < 750) {
        document.querySelector('.footer-title h4').innerHTML += '<span class="according-menu"></span>'
        const anchors = document.getElementsByClassName('footer-title')
        for (var i = 0; i < anchors.length; i++) {
          // eslint-disable-next-line
          let anchor = anchors[i]
          anchor.onclick = () => {
            let elems = document.querySelectorAll('.footer-title')
            ;[].forEach.call(elems, (elemt) => {
              elemt.classList.remove('active')
              let el = elemt.nextElementSibling
              el.style.height = el.offsetHeight + 'px'
              el.style.transitionProperty = `height, margin, padding`
              el.style.transitionDuration = '500ms'
              el.offsetHeight // eslint-disable-line no-unused-expressions
              el.style.overflow = 'hidden'
              el.style.height = 0
              el.style.paddingTop = 0
              el.style.paddingBottom = 0
              el.style.marginTop = 0
              el.style.marginBottom = 0
              el.style.display = 'none'
              el.style.removeProperty('height')
              el.style.removeProperty('padding-top')
              el.style.removeProperty('padding-bottom')
              el.style.removeProperty('margin-top')
              el.style.removeProperty('margin-bottom')
              el.style.removeProperty('overflow')
              el.style.removeProperty('transition-duration')
              el.style.removeProperty('transition-property')
            })

            // @FIXME this.classList not deined
            this.classList.add('active')
            let element = this.nextElementSibling
            element.style.removeProperty('display')
            let display = window.getComputedStyle(element).display
            if (display === 'none') {
              display = 'block'
            }
            element.style.display = display
            let height = element.offsetHeight
            element.style.overflow = 'hidden'
            element.style.height = 0
            element.style.paddingTop = 0
            element.style.paddingBottom = 0
            element.style.marginTop = 0
            element.style.marginBottom = 0
            element.offsetHeight // eslint-disable-line no-unused-expressions
            element.style.transitionProperty = `height, margin, padding`
            element.style.transitionDuration = '500ms'
            element.style.height = height + 'px'
            element.style.removeProperty('padding-top')
            element.style.removeProperty('padding-bottom')
            element.style.removeProperty('margin-top')
            element.style.removeProperty('margin-bottom')
            if (!isServer) {
              window.setTimeout(() => {
                element.style.removeProperty('height')
                element.style.removeProperty('overflow')
                element.style.removeProperty('transition-duration')
                element.style.removeProperty('transition-property')
              }, 500)
            }
          }
        }

        let elems = document.querySelectorAll('.footer-title')
        ;[].forEach.call(elems, (elemt) => {
          let el = elemt.nextElementSibling
          el.style = 'display: none'
        })
      } else {
        let elems = document.querySelectorAll('.footer-title')
        ;[].forEach.call(elems, (elemt) => {
          let el = elemt.nextElementSibling
          el.style = 'display: block'
        })
      }

      setTimeout(() => {
        let el = document.querySelector('.loader-wrapper')
        if (el) {
          el.style = 'display: none'
        }
      }, 2000)
    }
  }

  componentWillUnmount () {
    if (!isServer) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll () {
    if (!isServer) {
      if (document.documentElement.scrollTop > 600) {
        document.querySelector('.tap-top').style = 'display: block'
      } else {
        document.querySelector('.tap-top').style = 'display: none'
      }
    }
  }

  clickToTop () {
    if (!isServer) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  render () {
    let tapToTop = { display: 'none' }
    const { company } = this.props
    const block1 = [
      { title: 'About', url: `${URL}/about` },
      { url: `${URL}/privacy-policy`, title: 'Privacy Policy' },
      { url: `${URL}/disclaimer`, title: 'Disclaimer' },
      { url: `${URL}/terms-and-conditions`, title: 'Terms and Conditions' }
    ]

    const block2 = [
      { url: `${URL}/secure-shopping`, title: 'Secure Shopping' },
      { url: `${URL}/shipping-and-returns`, title: 'Shipping and Returns' },
      { url: `${URL}/contact-us`, title: 'Contact Us' }
    ]

    const block3 = [
      { url: `${URL}/categories`, title: 'Categories' },
      { url: `${URL}/discounts`, title: 'Top Discounts' },
      { url: `${URL}/best-sellers`, title: 'Best Sellers' },
      { url: `${URL}/popular`, title: 'High Rating' },
      { url: `${URL}/cheapest`, title: 'Cheapest' },
      { url: `${URL}/expensive`, title: 'Most Expensive' }
    ]

    return (
      <footer className="footer-light">
        <Subscribe />
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <a href={URL} >
                      <img src={logo} alt={LOGO_ALT} height="80" width="80" />
                    </a>
                  </div>
                  <Par>Helping people live better life for less</Par>
                  <SocialLinks />
                </div>
              </div>
              <FooterCol id="1" data={block1} {...this.props} />
              <FooterCol id="2" data={block2} {...this.props} />
              <FooterCol id="3" data={block3} {...this.props} />
            </div>
          </div>
        </section>
        <div className="sub-footer ">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p><i className="fa fa-copyright" aria-hidden="true"></i>
                    &nbsp;{ new Date().getFullYear() }, <strong><a href={URL}>{ company }</a></strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tap-top top-cls" onClick={this.clickToTop} onKeyPress={this.clickToTop} style={tapToTop} role="button" tabIndex={0}>
          <div>
            <i className="fa fa-angle-double-up"></i>
          </div>
        </div>
      </footer>
    )
  }
}

CubedFooter.propTypes = {
  company: PropTypes.string.isRequired
}

export default CubedFooter
