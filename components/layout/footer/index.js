import React from 'react'

import Subscribe from 'components/forms/subscribe'
import SocialLinks from 'components/elements/social-links'
import FooterCol from 'components/elements/footer-col'
import { FRONTEND_URL, COMPANY } from 'config'
import { Copyright, Footer, Col, Grid } from 'components/primitives'
import { t } from 'translations'

const block1 = [
  { title: 'About', url: `${FRONTEND_URL}/about` },
  { url: `${FRONTEND_URL}/privacy-policy`, title: t('privacy') },
  { url: `${FRONTEND_URL}/disclaimer`, title: t('disclaimer') },
  { url: `${FRONTEND_URL}/terms-and-conditions`, title: t('tac') }
]

const block2 = [
  { url: `${FRONTEND_URL}/`, title: 'Section 2' }
]

const CubedFooter = ({ ...props }) => {
  return (
    <Footer>
      <Grid>
        <Col row-end col-start>
          <Subscribe />
          <SocialLinks />
        </Col>
        <Col row-end col-center>
          <FooterCol id="1" data={block1} {...props} />
        </Col>
        <Col row-end col-end>
          <FooterCol id="2" data={block2} {...props} />
        </Col>
      </Grid>
      <Copyright>
        &copy; { new Date().getFullYear() }, <strong><a href={FRONTEND_URL} className="copyright">{ COMPANY }</a></strong>
      </Copyright>
    </Footer>
  )
}

export default CubedFooter
