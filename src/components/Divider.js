import React from 'react'

function Divider(props) {
  return (
    <div
      style={{
        height: props.divHeight,
        background: props.divColor,
        width: props.divWidth,
        margin: `${props.divTop} ${props.divRight} ${props.divBottom} ${props.divLeft}`,
      }}
    />
  )
}

Divider.defaultProps = {
  divHeight: 2,
  divColor: '##C0392B',
  divWidth: '50px',
  divTop: '0.5rem',
  divRight: 'auto',
  divBottom: '0.5rem',
  divLeft: 'auto',
}

export default Divider
