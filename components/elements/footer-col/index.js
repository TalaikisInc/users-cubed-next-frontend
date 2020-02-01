import React from 'react'

import { Heading } from 'components/primitives'

const FooterCol = ({ id, data, language }) => {
  return (
    <div>
      <Heading white>
        <a href={data[0].url} className="footer-link">{ data[0].title }</a>
      </Heading>
      <ul>
        { data.slice(1).map((e, i) => {
          return <li key={i} className="footer-list"><a href={ e.url } title={e.title} className="footer-link">{ e.title }</a></li>
        })
        }
      </ul>
      { language ? <SelectLanguage {...this.props}/> : null }
    </div>
  )
}

export default FooterCol
