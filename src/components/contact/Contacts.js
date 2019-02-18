import React, { Component } from 'react'

import Position from './Position'

// Style
import '../../styles/contacts.css'
import Footer from '../Footer'
// import { Browser } from 'leaflet'

class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>
          Page Contacts{' '}
          <span role="img" aria-label="emoji">
            📮
          </span>
        </h2>

        <div className="contacts">
          <div className="contacts_info">
            <h3>Karukera Shaolin Kung Fu</h3>
            <p>
              Les entraînements se déroulent au foyer culturel de Fond BUDAN à
              Baie-Mahault selon le planning suivant :{' '}
            </p>

            <div className="horaires">
              <h4>Horaires</h4>
              <div className="table">
                <div>
                  <p>Mardi</p>
                  <p>Plus de 15 ans : 18H30 - 20H00</p>
                </div>
                <div>
                  <p>Mercredi</p>
                  <p>
                    6 à 10 ans : 17H30 - 18H30
                    <br />
                    11 à 15 ans : 18H30 - 20H00
                  </p>
                </div>
                <div>
                  <p>Jeudi</p>
                  <p>Plus de 15 ans : 18H30 - 20H00</p>
                </div>
                <div>
                  <p>Vendredi</p>
                  <p>
                    6 à 10 ans : 17H30 - 18H30
                    <br />
                    11 à 15 ans : 18H30 - 20H00
                  </p>
                </div>
              </div>
            </div>

            <p>
              Vous pouvez venir assister aux cours et aussi participer à un
              cours d'essais
            </p>
            <p className="contact_mail">
              Vous pouvez nous contacter par courrier, par téléphone ou par mail
              :
            </p>
            <p>
              <b>Boulevard de Destrellan ( RN 2002 )</b>
            </p>
            <p className="contact_mail">
              <b>97122, Baie-Mahault</b>
            </p>
            <p>
              Tel : <a href="tel:+590690507028">0690.50.70.28 </a>
            </p>
            <p>
              mail : <a href="mailto:kskf971@yahoo.fr">kskf971@yahoo.fr</a>
            </p>
          </div>
          <Position />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Contacts
