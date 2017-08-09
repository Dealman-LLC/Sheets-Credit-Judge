import React from 'react'
import gavel from '../images/gavel.png'

import '../styles/tagline.css'

function Tagline({ children }) {
  return (
    <div
      className='tagline'
    >
      <img src={gavel} alt="Sheets Judge Gavel" />
      <div
        style={{
          fontSize: '1.25rem',
          lineHeight: 1.25,
          fontWeight: 400,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Tagline
