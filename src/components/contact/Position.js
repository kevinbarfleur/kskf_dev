import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

// Style
import '../../styles/tooltip.css'

const AnyReactComponent = ({ text }) => {
  return <div className="tooltip">{text}</div>
}

const MAP_OPTIONS = {
  scrollwheel: false,
  fullscreenControl: false,
  styles: [
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          saturation: 36
        },
        {
          color: '#000000'
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#000000'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#838383'
        }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#c4c4c4'
        }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#aaaaaa'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#151516'
        },
        {
          lightness: '0'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 21
        },
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        },
        {
          hue: '#ff0000'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [
        {
          saturation: '-100'
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#6e6e6e'
        },
        {
          lightness: '0'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#575757'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#c3c3c3'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#2c2c2c'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#5f5f5f'
        },
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#717171'
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000'
        },
        {
          lightness: 17
        }
      ]
    }
  ]
}

class Position extends Component {
  static defaultProps = {
    center: {
      // lat: 16.254066,
      // lng: -61.60406
      lat: 16.253534,
      lng: -61.588398
    },
    zoom: 15
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        className="map"
        style={{
          height: '100vh',
          width: '100vw'
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
