import React from 'react'

import chrysler from '../images/Chrysler_logo.png'
import dodge from '../images/Dodge_logo.png'
import ram from '../images/dodge-ram.png'
import jeep from '../images/Jeep-logo.png'

class Section2 extends React.Component {
  render() {
    return (
      <section
        className='section section--light'
        style={{
          background: `#EEEEEE`
        }}
      >
        <div
          className='container container--row container--brands'
          style={{
            alignItems: 'center'
          }}
        >
          <img src={chrysler} alt="Chrysler" />
          <img src={dodge} alt="Dodge" />
          <img src={ram} alt="Ramm" />
          <img src={jeep} alt="Jeep" />
        </div>
      </section>
    )
  }
}

export default Section2
