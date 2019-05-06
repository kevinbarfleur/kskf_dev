import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

// Tools
import ScrollTop from './tools/ScrollTop'

// Navbar & Footer Components
import Navbar from './Navbar'
import Footer from './Footer'
import Loading from './Loading'

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
import '../styles/linkGradient.css'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
})

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 10000)
  }

  closeNavbar = () => {
    this.refs.navbarComponent.closeNavbar()
  }

  render() {
    const loadingView = this.state.isLoading ? (
      <Loading height="100vh" />
    ) : (
      <Loading height="100vh" />
    )

    return (
      <Fragment>
        {loadingView}
        <ScrollTop>
          <Navbar ref="navbarComponent" location={window.location.pathname} />
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
        </ScrollTop>
      </Fragment>
    )
  }
}

export default App
