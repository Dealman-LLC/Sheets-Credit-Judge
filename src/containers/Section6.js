import React from 'react'

import map from '../images/map.png'
import sheets from '../images/sheets-logo.png'
import sheets2x from '../images/sheets-logo@2x.png'

class Section6 extends React.Component {

  render() {
    return (
      <section
        className='section section--background'
        style={{
          background: `url(${map})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',  
          color: '#ffffff',
          fontFamily: 'Open Sans',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={sheets2x}
          width='50%'
          alt="Sheets Logo"
          style={{
            margin: '0 auto',
          }}
        />
      </section>
    )
  }
}

export default Section6
