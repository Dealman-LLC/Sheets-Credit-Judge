import React from 'react'
import Link from 'gatsby-link'

import Section1 from '../containers/Section1'
import Section2 from '../containers/Section2'
import Section3 from '../containers/Section3'
import Section4 from '../containers/Section4'
import Section5 from '../containers/Section5'
import Section6 from '../containers/Section6'
import Section7 from '../containers/Section7'

import '../styles/section.css'

const IndexPage = () =>
  <main>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
  </main>

export default IndexPage
