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
                className="presentation"
                to="presentation"
                smooth={true}
                duration={1500}
              >
                Présentation
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="logoEcole"
                to="logoEcole"
                smooth={true}
                duration={1500}
              >
                Le logo de l'école
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="maitre"
                to="maitre"
                smooth={true}
                duration={1500}
              >
                Notre Maitre
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="karukera"
                to="karukera"
                smooth={true}
                duration={1500}
              >
                Karukéra
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
              className="kungfu"
              to="kungfu"
              smooth={true}
              duration={1500}
            >
              Le Kung Fu Shaolin
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="taichi"
              to="taichi"
              smooth={true}
              duration={1500}
            >
              Tai Chi et Chi Kung
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="style"
              to="style"
              smooth={true}
              duration={1500}
            >
              Notre Style
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="soinsEnergetiques"
              to="soinsEnergetiques"
              smooth={true}
              duration={1500}
            >
              Soins énergétiques
            </Link>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}
