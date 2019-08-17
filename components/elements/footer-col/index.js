import React from 'react'

export default ({ id, data, language }) => {
  const classes = id === 1 ? 'col offset-xl-1' : 'col'

  return (
    <div className={classes}>
      <div className="sub-title">
        <div className="footer-title">
          <h4><a href={data[0].url}>{ data[0].title }</a></h4>
        </div>
        <div className="footer-contant">
          <ul>
            { data.slice(1).map((e, i) => {
              return <li key={i}><a href={ e.url } title={e.title}>{ e.title }</a></li>
            })
            }
          </ul>
          { language ? <SelectLanguage {...this.props}/> : null }
        </div>
      </div>
    </div>
  )
}
