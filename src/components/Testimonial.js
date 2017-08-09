import React from 'react'

import quote from '../images/quotes.png'

function Testimonial(props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <img
        src={quote}
        alt="Quote Symbol"
        style={{
          marginTop: '0.2rem',
        }}
      />
      <div
        style={{
          textAlign: 'left',
          width: 450,
          marginLeft: '0.5rem',
          marginBottom: '0.5rem',
          background: '#ffffff',
          padding: '0.25rem 0.5rem',
          borderRadius: '5px',
        }}
      >
        <p
          style={{
            fontSize: '0.8rem',
            marginBottom: 0,
            lineHeight: 1.5,
          }}
        >
          {props.text}
        </p>
        <span
          style={{
            color: '#A9A9A9',
            fontStyle: 'italic',
            fontSize: '0.7rem',
            display: 'block',
          }}
        >
          — {props.name}
        </span>
      </div>
    </div>
  )
}

export default Testimonial
