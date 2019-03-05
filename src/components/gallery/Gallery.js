import React, { Component } from 'react'
import posed from 'react-pose'

// Components
import GalleryTiles from './GalleryTiles'

// Styles
import '../../styles/gallery.css'

const Container = posed.div({
  enter: { staggerChildren: 10 }
})

class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <GalleryTiles />
        </Container>
      </React.Fragment>
    )
  }
}

export default Gallery
