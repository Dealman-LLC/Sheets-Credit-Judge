import React from 'react'

import Divider from '../components/Divider'

import '../styles/card.css'

import downturn from '../images/downturn.png'
import signature from '../images/signature.png'
import towing from '../images/towing.png'

class Section3 extends React.Component {
  render() {
    return (
      <section
        className='section'
      >
        <div
        className='container container--column'
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <h2
              style={{
                fontSize: '2.05rem',
                marginBottom: '0.25rem',
              }}
            >
              Think You Can’t Buy a Car?
            </h2>
            <h3
              style={{
                color: '#A9A9A9',
                fontSize: '1.55rem',
                marginBottom: '0.5rem',
              }}
            >
              I'll be the judge of that.
            </h3>
            <Divider
              divHeight="2px"
              divColor="#C0392B"
              divWidth="10%"
              divTop="1rem"
              divBottom="0.75rem"
            />
            <p
              style={{
                fontSize: '0.9rem',
              }}
            >
              For over 30 years the Sheets Credit Judge has helped people just
              like you get the financing they need, at a rate they can afford.
              <br />
              With a network of lenders eager to make your next vehicle a
              reality, the Judge has the authority to get the deal{' '}
              <strong>done.</strong>{' '}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div
              className="card"
            >
              <img src={downturn} alt="Laid Off" />
              <h3>Laid Off?</h3>
              <p
              >
                Change in income? See how the Judge can help you lower your car
                payment today.
              </p>
              <button
                type="button"
                style={{
                  background: '#C0392B',
                  color: '#FFFFFF',
                  width: '100%',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0.9rem 0 0.9rem 0',
                  cursor: 'pointer',
                }}
              >
                WATCH
              </button>
            </div>
            <div
              className="card"
            >
              <img src={signature} alt="First Time Car Buyer" />
              <h3>First Time Buyer?</h3>
              <p>
                Think your lack of credit will hurt your chances of owning a
                car? Think again.
              </p>
              <button
                type="button"
                style={{
                  background: '#C0392B',
                  color: '#FFFFFF',
                  width: '100%',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0.9rem 0 0.9rem 0',
                  cursor: 'pointer',
                }}
              >
                WATCH
              </button>
            </div>
            <div
              className="card"
            >
              <img src={towing} alt="Repossession" />
              <h3>Repossession?</h3>
              <p>
                Is less than perfect credit history stopping you in your tracks?
                Objection, your honor!
              </p>
              <button
                type="button"
                style={{
                  background: '#C0392B',
                  color: '#FFFFFF',
                  width: '100%',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0.9rem 0 0.9rem 0',
                  cursor: 'pointer',
                }}
              >
                WATCH
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Section3.propTypes = {}

export default Section3
