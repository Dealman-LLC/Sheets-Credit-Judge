import React from 'react'
import phone from '../images/phone.png'

function Call(props) {
  return (
    <div
      className={props.className}
    >
      <img
        src={phone}
        alt="Sheets Phone"
        style={{
          float: 'left',
          height: 80,
        }}
      />
      <div
        style={{
          float: 'right',
          textAlign: 'center',
          color: '#ffffff',
          marginLeft: 16,
        }}
      >
        <div
          style={{
            fontSize: 18,
            lineHeight: '43px',
          }}
        >
          CALL THE CREDIT JUDGE
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 'bold',
          }}
        >
          800.285.8993
        </div>
      </div>
    </div>
  )
}

export default Call
