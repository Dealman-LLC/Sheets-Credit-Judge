import React from 'react'
import Link from 'gatsby-link'
import ReactPlayer from 'react-player'

import Headline from '../components/Headline'
import Tagline from '../components/Tagline'
import Form from '../components/Form'
import Divider from '../components/Divider'
import Call from '../components/Call'

import courtroom from '../images/courtroom.jpg'

class Section1 extends React.Component {
  render() {
    return (
      <section
        className='section section--background'
        style={{
          background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${courtroom})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: '#ffffff',
          paddingTop: 0,
        }}
      >
        <div
          className='container container--row container--courtroom'
        >
          <div>
            <Headline />
            <Tagline>
              <p>
                Bad credit? No credit? No problem. <br /> There’s no case the
                Judge won’t take.
              </p>
            </Tagline>
            <Tagline>
              <p>
                The Credit Judge has over 30 years of experience <br /> to get
                you in the right vehicle at the right price.
              </p>
            </Tagline>
            <ReactPlayer url="https://www.youtube.com/watch?v=AX0X0joFJ9g" width='100%'/>
          </div>
          <Form />
          <Call className='call call--section' />
        </div>
      </section>
    )
  }
}

export default Section1
