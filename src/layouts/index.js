import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Call from '../components/Call'

import './index.css'
import '../styles/container.css'
import logo from '../images/logo.png'
import favicon from '../images/gavel.png'

const Header = () =>
  <div
    style={{
      background: 'transparent',
      position: 'absolute',
      width: '100%',
    }}
  >
    <div
      className='container container--row container--header'
      style={{
        padding: '1.45rem 0',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <img className='logo' src={logo} alt="The Credit Judge" />
        </Link>
      </h1>
      <Call className='call call--header'/>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="The Credit Judge - Sheets Automotive"
      meta={[
        { name: 'description', content: 'Sample' },
        {
          name: 'keywords',
          content:
            'bad credit financing, car loan, auto financing, truck loan, west virginia car dealer',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
      ]}
    >
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <Header />
    <div
      style={{
        background: 'transparent',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
