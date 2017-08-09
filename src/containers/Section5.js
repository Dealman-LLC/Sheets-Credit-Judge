import React from 'react'
import Scroll from 'react-scroll'

import behindBars from '../images/behind-bars.png'

// const scroll = Scroll.animateScroll;

class Section5 extends React.Component {
  
  render() {
    return (
      <section
        className='section section--background'
        style={{
          background: `url(${behindBars})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color: '#ffffff',
          fontFamily: 'Open Sans',
        }}
      >
        <div
          id='scrollContainer'
          className='container container--simple'
        >
          <h4
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              color: '#C0392B'
            }}
          >
            The Judge is Ready to Take Your Case
          </h4>
          <h2
            style={{
              fontWeight: 800,
              fontSize: '1.85rem',
              lineHeight: 1.5,
            }}
          >
            Visit Sheets Today to Put
            <br />
            Bad Credit Behind Bars
          </h2>
          <button
            onClick={() => Scroll.scroller.scrollTo('lead-form', {
              delay: 100,
              container: 'scrollContainer',
              smooth: true,
              duration: 500
            })}
            type="button"
            style={{
              background: '#C0392B',
              color: '#FFFFFF',
              fontSize: '0.8rem',
              fontWeight: 800,
              border: 'none',
              borderRadius: '5px',
              padding: '0.9rem 1.8rem 0.9rem 1.8rem',
              cursor: 'pointer',
              boxShadow: '0px 17px 10px -10px rgba(0,0,0,0.4)',
            }}
          >
            LOCK UP YOUR DEAL TODAY
          </button>
        </div>
      </section>
    )
  }
}

export default Section5
