import React from 'react'
import Slider from 'react-slick'

import Divider from '../components/Divider'
import Testimonial from '../components/Testimonial'

import '../styles/testimonial.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'

class Section4 extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
    }

    return (
      <section
        className='section section--light'
        style={{
          background: '#EEEEEE'
        }}
      >
        <div
          className='container container--row'
          style={{
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: 525,
            }}
          >
            <Slider {...settings}>
              <div>
                <img src={slide1} alt="Sheets Judge Testimonial" />
              </div>
              <div>
                <img src={slide2} alt="Sheets Judge Testimonial" />
              </div>
              <div>
                <img src={slide3} alt="Sheets Judge Testimonial" />
              </div>
              <div>
                <img src={slide4} alt="Sheets Judge Testimonial" />
              </div>
              <div>
                <img src={slide5} alt="Sheets Judge Testimonial" />
              </div>
            </Slider>
          </div>
          <div
            className='testimonial'
            style={{
              textAlign: 'left',
              width: 525,
            }}
          >
            <h2
              style={{
                marginBottom: 0,
              }}
            >
              Testimonials
            </h2>
            <Divider
              divHeight="2px"
              divColor="#C0392B"
              divWidth="10%"
              divTop="0.75rem"
              divBottom="0.75rem"
              divLeft="0"
              divRight="0"
            />
            <p
              style={{
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                lineHeight: 1.55,
              }}
            >
              Don’t take our word for it. Read some of our clients’ verdicts,
              and see how they judge the Judge.
            </p>
            <Testimonial
              text="Helped us when no one else would. Got us into an awesome SUV, and worked hard to get us the best rate possible. Will recommend to any and everyone!"
              name="Kasie Vipperman"
            />
            <Testimonial
              text="Sheets and the Judge worked extra hard to help our growing family get into a vehicle that suits our needs, at a price that exceeded our expectations. We were treated as friends, and not dollar signs. They even fed my kids pizza while we waited to sign papers!"
              name="Ashley Stewart"
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Section4
