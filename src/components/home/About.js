import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

// Components
import Preview from './Preview'

const image_about1 = require('../../images/home/about_1.jpg')
const image_about2 = require('../../images/home/about_2.jpg')

class About extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="container__about">
          {/* <h2 className="title__about">
            Karukera Shaolin Kung Fu <div className="subline" />
          </h2> */}
          <Element name="about">
            <div className="container__section">
              <div className="subsection img">
                <img
                  className="about__image"
                  src={image_about1}
                  alt="salut kung fu kskf"
                />
              </div>
              <div className="subsection">
                <h3>Que faisons nous ?</h3>
                <p>
                  Notre pratique s'inscrit à travers l'étude de techniques
                  martiales, où chaque élève devient un expérimentateur, un
                  chercheur qui veut découvrir son être profond.
                </p>
                <p>
                  Dans ce cadre chaque pratiquant quelque soit son âge, son
                  niveau et ses capacités s'engage sur un chemin, sur une voie
                  où seule la persévérance lui permettra de progresser.
                </p>
                <p>
                  La pratique du Kung Fu tel que nous l'entendons et que nous
                  voulons l'enseigner, s'adresse en premier lieu au corps, mais
                  doit en chaque occasion toucher aussi l'esprit. C'est vouloir
                  en permanence unir ce corps et cet esprit qui constitue le
                  fondement de notre art.
                </p>
                <p className="more-link">
                  <Link to="/arts-martiaux" className="underline_magical">
                    Plus de détails &#8594;
                  </Link>
                </p>
              </div>
            </div>
          </Element>

          <div className="preview_title">
            <h3>Aperçu</h3>
          </div>

          <Preview />

          <div className="separator_preview" />

          <div className="container__section">
            <div className="subsection">
              <h3>Pourquoi ?</h3>
              <p>
                L’art du Kung Fu est à plusieurs étages. L’intérêt de la
                pratique est de les gravir un à un avec les difficultés liées à
                une ascension.{' '}
              </p>
              <p>
                Le voyage est merveilleux car il vous renvoie en permanence en
                vous-même et il réclame de la sincérité. L’effort physique
                souvent intense avec la recherche de la force, de la vitesse, de
                la souplesse, de la respiration… La disponibilité mentale pour
                améliorer sa mémoire, sa concentration ; sa respiration, sa
                sérénité demandent de se jeter corps et âmes dans cette voie du
                Kung Fu.{' '}
              </p>
              <p>
                Mais attention les pièges sont nombreux et l’évolu tion du monde
                moderne rend de plus en plus difficile les possibilités de
                mettre en adéquation sa pratique et ses objectifs.
              </p>
              <p className="more-link">
                <Link to="/arts-martiaux" className="underline_magical">
                  En savoir plus &#8594;
                </Link>
              </p>
            </div>
            <div className="subsection img">
              <img
                className="about__image"
                src={image_about2}
                alt="salut kung fu kskf"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default About
