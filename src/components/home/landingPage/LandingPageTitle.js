import React from 'react'
import posed from 'react-pose'
const Button = posed.button({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
})

const LandingPageTitle = () => (
  <React.Fragment>
    <div className="home__title">
      <h1>Karukera Shaolin Kung Fu</h1>
      <p>École de Kung Fu traditionnelle</p>
      <p>Baie - Mahault, Guadeloupe</p>
      <Button>En savoir plus</Button>
    </div>
  </React.Fragment>
)

export default LandingPageTitle
