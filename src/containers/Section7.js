import React from 'react'

import '../styles/container.css'

import logo from '../images/logo.png'

import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'

class Section7 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <section
        className='section section--dark'
        style={{
          background: `#000000`
        }}
      >
        <footer
          className='container container--column'
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              <img className='footer__logo' src={logo} alt="Sheets Credit Judge Logo" />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8rem',
              textAlign: 'center',
            }}
          >
            <div
            >
              <p>
                250 Auto Plaza Drive
                <br />
                Beckley, WV 25801
              </p>
            </div>
            <div
              className='footer__social'
              style={{
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              <a href="https://www.facebook.com/sheetscreditjudge/">
                <img src={facebook} alt="Visit Sheets Facebook" />
              </a>
              {/*FIXME Twitter link is broken. Account disabled? */}
              <a href="https://twitter.com/SheetsCDJR">
                <img src={twitter} alt="Visit Sheets Twitter" />
              </a>
              {/*FIXME Instagram link is broken. Account disabled? */}
              <a href="https://www.instagram.com/sheetschryslerdodgejeepram/">
                <img src={instagram} alt="Visit Sheets on Instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCundr0BkuqOJw-YuE5xP7Zg">
                <img src={youtube} alt="Visit Sheets YouTube Channel" />
              </a>
            </div>
            <div
            >
              <p>
                3941 Robert C Byrd Drive
                <br />
                Beckley, WV 25801
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontWeight: 800,
              }}
            >
              <p>TERMS &amp; CONDITIONS</p>
            </div>
            <div>
              <p>
                &copy; 2017 Sheets Credit Judge. All Rights Reserved.
                <br />
                Developed by{' '}
                <a
                  href="http://dealman.net"
                  style={{
                    color: '#FCAF34',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  Dealman
                </a>
              </p>
            </div>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              <p>PRIVACY POLICY</p>
            </div>
          </div>
        </footer>
      </section>
    )
  }
}

export default Section7
