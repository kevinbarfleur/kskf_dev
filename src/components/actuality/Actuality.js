import React, { Component } from 'react'
import posed from 'react-pose'

// Styles
import '../../styles/actuality.css'
import '../../styles/timeline.css'

const Container = posed.div({
  enter: { staggerChildren: 50 }
})

const Subsection = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
})

const imageTest = require('../../images/martialsarts/martials_3.jpg')

class Actuality extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="actuality_container">
            <div className="container">
              <div className="actualityTitle">
                <h1>Actualités</h1>
                <p>
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, facilis quo maiores magnam modi ab libero praesentium
                    blanditiis. <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, facilis quo. Maiores magnam modi ab libero
                    praesentium blanditiis consequatur aspernatur accusantium
                    maxime molestiae sunt ipsa.
                  </i>
                </p>
              </div>
              <div id="timeline">
                <Subsection>
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-asterisk" />
                    </div>
                    <div className="timeline-content">
                      <h2>Passage de ceintures</h2>
                      <p>
                        <i>Samedi 22 Juin 2018</i>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque, facilis quo maiores magnam modi ab libero
                        praesentium blanditiis.
                      </p>
                    </div>
                  </div>
                </Subsection>

                <Subsection>
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-asterisk" />
                    </div>
                    <div className="timeline-content right">
                      <h2>Soirée Barbecue et Films</h2>
                      <img src={imageTest} alt="" />
                      <p>
                        <i>Samedi 29 Juin 2018</i>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque, facilis quo. Maiores magnam modi ab libero
                        praesentium blanditiis consequatur aspernatur
                        accusantium maxime molestiae sunt ipsa.
                      </p>
                    </div>
                  </div>
                </Subsection>

                <Subsection>
                  <div className="timeline-item">
                    <div className="timeline-icon">
                      <i className="fas fa-asterisk" />
                    </div>
                    <div className="timeline-content">
                      <h2>LOREM IPSUM DOLOR</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque, facilis quo. Maiores magnam modi ab libero
                        praesentium blanditiis consequatur aspernatur
                        accusantium maxime molestiae sunt ipsa.
                      </p>
                    </div>
                  </div>
                </Subsection>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Actuality
