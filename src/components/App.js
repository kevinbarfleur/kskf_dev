import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Navbar & Footer Components
import Navbar from './Navbar'
// import Footer from './Footer'

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

class App extends Component {
  closeNavbar = () => {
    this.refs.navbarComponent.closeNavbar()
  }

  render() {
    return (
      <Router>
        <div className="app_container">
          <Navbar ref="navbarComponent" />

          <div className="content" onClick={this.closeNavbar}>
            <Route exact path="/" component={Home} />
            <Route path="/ecole" component={School} />
            <Route path="/ecole" component={School} />
            <Route path="/arts-martiaux" component={Martials_Arts} />
            <Route path="/actualites" component={Actuality} />
            <Route path="/gallerie" component={Gallery} />
            <Route path="/contacts" component={Contacts} />
          </div>

          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

export default App
