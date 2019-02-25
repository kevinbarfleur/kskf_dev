import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

// Navbar & Footer Components
import Navbar from './Navbar'
import Footer from './Footer'

// Pages
import Home from './home/Home'
import Martials_Arts from './martialarts/MartialsArts'
import Actuality from './actuality/Actuality'
import Gallery from './gallery/Gallery'
import Contacts from './contact/Contacts'

// Styles
import '../styles/reset.css'

import School from './school/School'

// Styles
import '../styles/reset.css'
import '../styles/app.css'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
})

class App extends Component {
  closeNavbar = () => {
    this.refs.navbarComponent.closeNavbar()
  }

  render() {
    return (
      <Fragment>
        <Navbar ref="navbarComponent" />
        <Route
          render={({ location }) => (
            <div className="content" onClick={this.closeNavbar}>
              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} key="home" />
                    <Route path="/ecole" component={School} key="ecole" />
                    <Route
                      path="/arts-martiaux"
                      component={Martials_Arts}
                      key="arts-martiaux"
                    />
                    <Route
                      path="/actualites"
                      component={Actuality}
                      key="actualites"
                    />
                    <Route
                      path="/gallerie"
                      component={Gallery}
                      key="gallerie"
                    />
                    <Route
                      path="/contacts"
                      component={Contacts}
                      key="contacts"
                    />
                  </Switch>
                </RouteContainer>
              </PoseGroup>
            </div>
          )}
        />
        <Footer />
      </Fragment>
    )
  }
}

export default App
