import React, { Component } from 'react'

// Container
import Position from './Position'

// Style
import '../../styles/contacts.css'
import '../../styles/linkGradient.css'

class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact_container">
          <div className="flexbox_placeholder" />
          <div className="contacts">
            <div className="contacts_info">
              <h3>Contact</h3>
              <p>
                Les entraînements se déroulent au foyer culturel de Fond BUDAN à
                Baie-Mahault selon le planning suivant :{' '}
              </p>
              <div className="horaires">
                <div>
                  <p>
                    <b>6 à 10 ans</b>
                  </p>
                  <p>Mercredi et Samedi : 17H30 - 18H30</p>
                </div>
                <div>
                  <p>
                    <b>11 à 15 ans</b>
                  </p>
                  <p>Mercredi et Samedi : 18H30 - 20H00</p>
                </div>
                <div>
                  <p>
                    <b>Plus de 15 ans</b>
                  </p>
                  <p>Mardi et Vendredi : 18H30 - 20H00</p>
                </div>
              </div>

              <p>
                <i>
                  Vous pouvez venir assister aux cours et aussi participer à un
                  cours d'essais.
                </i>
              </p>
              <p className="contact_mail">
                Vous pouvez nous contacter par <b>téléphone</b> ou par{' '}
                <b>mail</b> :
              </p>
              <p>
                Tel :{' '}
                <a
                  className="underline_magical"
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    padding: 3
                  }}
                  href="tel:+590690507028"
                >
                  0690.50.70.28{' '}
                </a>
              </p>
              <p>
                mail :{' '}
                <a
                  className="underline_magical"
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    padding: 3
                  }}
                  href="mailto:kskf971@yahoo.fr"
                >
                  kskf971@yahoo.fr
                </a>
              </p>
            </div>
          </div>
        </div>
        <Position />
      </React.Fragment>
    )
  }
}

export default Contacts
