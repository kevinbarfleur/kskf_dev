import React, { Component } from 'react'
import posed from 'react-pose'

// Components
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

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

const Subsection = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 0, opacity: 0 }
})

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="home">
            <Subsection>
              <LandingPage />
              <About />
            </Subsection>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Home
