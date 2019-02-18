import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

// Style
import '../../styles/tooltip.css'

const AnyReactComponent = ({ text }) => <div className="tooltip">{text}</div>
const MAP_OPTIONS = {
  scrollwheel: false
}

class Position extends Component {
  static defaultProps = {
    center: {
      lat: 16.254066,
      lng: -61.60406
    },
    zoom: 15
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        className="map"
        style={{
          height: '70vh',
          width: '70%'
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDdIrKETKggpgW9Yjfxoze37hGSqCJE1f8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={MAP_OPTIONS}
        >
          <AnyReactComponent lat={16.254066} lng={-61.60406} text={'KSKF'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Position
