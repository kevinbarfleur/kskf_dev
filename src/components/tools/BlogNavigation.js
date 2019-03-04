import React from 'react'
import { Link } from 'react-scroll'

import '../../styles/blogNavigation.css'

export class SchoolBlogNavigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sticky">
          <ul className="summary-blog">
            <li>
              <Link
                activeClass="active"
                className="presentation underline_magical"
                to="presentation"
                smooth={true}
                duration={1500}
              >
                <i className="fas fa-asterisk" /> Présentation
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="logoEcole underline_magical"
                to="logoEcole"
                smooth={true}
                duration={1500}
              >
                <i className="fas fa-asterisk" /> Le logo de l'école
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="maitre underline_magical"
                to="maitre"
                smooth={true}
                duration={1500}
              >
                <i className="fas fa-asterisk" /> Notre Maitre
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="karukera underline_magical"
                to="karukera"
                smooth={true}
                duration={1500}
              >
                <i className="fas fa-asterisk" /> Karukéra
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export class MartialArtBlogNavigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="summary-blog">
          <li>
            <Link
              activeClass="active"
              className="kungfu underline_magical"
              to="kungfu"
              smooth={true}
              duration={1500}
            >
              <i className="fas fa-asterisk" /> Le Kung Fu Shaolin
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="taichi underline_magical"
              to="taichi"
              smooth={true}
              duration={1500}
            >
              <i className="fas fa-asterisk" /> Tai Chi et Chi Kung
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="style underline_magical"
              to="style"
              smooth={true}
              duration={1500}
            >
              <i className="fas fa-asterisk" /> Notre Style
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="soinsEnergetiques underline_magical"
              to="soinsEnergetiques"
              smooth={true}
              duration={1500}
            >
              <i className="fas fa-asterisk" /> Soins énergétiques
            </Link>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
