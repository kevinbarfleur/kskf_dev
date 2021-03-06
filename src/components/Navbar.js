import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Styles
import '../styles/navbar.css'
import '../styles/blogLink.css'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarStatus: 'active'
    }
  }

  closeNavbar = () => {
    this.setState({ navbarStatus: 'active' })
  }

  toggleNavState = () => {
    const status = this.state.navbarStatus

    if (status === 'active') {
      this.setState({ navbarStatus: '' })
    } else {
      this.setState({ navbarStatus: 'active' })
    }
  }

  closeResponsiveNav = () => {
    const status = this.state.navbarStatus
    if (status === 'active') {
      this.setState({ navbarStatus: '' })
    }
  }

  render() {
    const BlogLink = () => (
      <a
        href="https://kskfactus.netlify.com/"
        style={{ textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="blogLink">
          <i className="far fa-newspaper" /> Actualités
        </li>
      </a>
    )

    const location = this.props.location
    const isHome = location === '/' ? 'currentLocation' : null
    const isContact = location === '/contacts' ? 'currentLocation' : null
    const isSchool = location === '/ecole' ? 'currentLocation' : null
    const isMartials = location === '/arts-martiaux' ? 'currentLocation' : null
    // const isGallery = location === '/gallerie' ? 'currentLocation' : null
    // const isActuality = location === '/actualites' ? 'currentLocation' : null

    const orderedView =
      this.state.navbarStatus === 'active' ? (
        <div>
          {BlogLink()}
          <li className={`navbar__link ${isContact}`}>
            <Link to="/contacts" style={{ textDecoration: 'none' }}>
              <i className="fas fa-mail-bulk" /> Contacts
            </Link>
          </li>
          {/* <li className={`navbar__link ${isGallery}`}>
            <Link to="/gallerie" style={{ textDecoration: 'none' }}>
              <i className="far fa-images" /> Gallerie
            </Link>
          </li>
          <li className={`navbar__link ${isActuality}`}>
            <Link to="/actualites" style={{ textDecoration: 'none' }}>
              <i className="far fa-newspaper" /> Actualités
            </Link>
          </li> */}
          <li className={`navbar__link ${isMartials}`}>
            <Link to="/arts-martiaux" style={{ textDecoration: 'none' }}>
              <i className="fas fa-fist-raised" /> Arts Martiaux
            </Link>
          </li>
          <li className={`navbar__link ${isSchool}`}>
            <Link to="/ecole" style={{ textDecoration: 'none' }}>
              <i className="fas fa-graduation-cap" /> L'école
            </Link>
          </li>
          <li className={`navbar__link ${isHome}`}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <i className="fas fa-home" /> Acceuil
            </Link>
          </li>
          <li className="navbar__link link__home">
            <Link to="/" style={{ textDecoration: 'none' }}>
              KSKF
            </Link>
          </li>
        </div>
      ) : (
        <div>
          <li className={`navbar__link ${isHome}`}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                fontFamily: 'Montserrat',
                fontSize: 14
              }}
              onClick={this.toggleNavState}
            >
              {' '}
              <i className="fas fa-home" /> Acceuil
            </Link>
          </li>
          <li className={`navbar__link ${isSchool}`}>
            <Link
              to="/ecole"
              style={{ textDecoration: 'none' }}
              onClick={this.toggleNavState}
            >
              {' '}
              <i className="fas fa-graduation-cap" /> L'école
            </Link>
          </li>
          <li className={`navbar__link ${isMartials}`}>
            <Link
              to="/arts-martiaux"
              style={{ textDecoration: 'none' }}
              onClick={this.toggleNavState}
            >
              <i className="fas fa-fist-raised" /> Arts Martiaux
            </Link>
          </li>
          {/* <li className={`navbar__link ${isActuality}`}>
            <Link
              to="/actualites"
              style={{ textDecoration: 'none' }}
              onClick={this.toggleNavState}
            >
              {' '}
              <i className="far fa-newspaper" /> Actualités
            </Link>
          </li>
          <li className={`navbar__link ${isGallery}`}>
            <Link
              to="/gallerie"
              style={{ textDecoration: 'none' }}
              onClick={this.toggleNavState}
            >
              <i className="far fa-images" /> Gallerie
            </Link>
          </li> */}
          <li className={`navbar__link ${isContact}`}>
            <Link
              to="/contacts"
              style={{ textDecoration: 'none' }}
              onClick={this.toggleNavState}
            >
              <i className="fas fa-mail-bulk" /> Contacts
            </Link>
          </li>
          {BlogLink()}
        </div>
      )

    return (
      <React.Fragment>
        <div className="navbar">
          <ul className={this.state.navbarStatus}>{orderedView}</ul>

          <div className="toggle-nav" onClick={this.toggleNavState}>
            &#9776;
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Navbar
