import React, { Component } from 'react'
import LandingPage from './LandingPage'
import About from './About'

// Styles
import '../../styles/homeDisplay.css'
import '../../styles/landingPage.css'
import '../../styles/about.css'
import '../../styles/preview.css'

// Styles
import '../../styles/homeDisplay.css'
import '../../styles/landingPage.css'
import '../../styles/about.css'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <LandingPage />
          <About />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
