import React from 'react'
import LandingPageTitle from './landingPage/LandingPageTitle'
import LandingPageScrollDown from './landingPage/LandingPageScrollDown'

const LandingPage = () => (
  <React.Fragment>
    <div className="landingPage__content">
      <LandingPageTitle />
      <LandingPageScrollDown />
    </div>
  </React.Fragment>
)

export default LandingPage
