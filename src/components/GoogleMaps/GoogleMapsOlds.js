import React from 'react'
import GoogleMapReact from 'google-map-react';


const GoogleMaps = () => {
    const coords = {lat:0, lng:0}
  return (
    <div>
        <GoogleMapReact
        // bootstrapURLKeys={{key:'AIzaSyAwaEfseFwAfRTc3WSYu2lMq_BETBl3ZNY'}} 
        // defaultCenter={coords}
        // center={coords}
        // defaultZoom={14}
        // margin={[50,50,50,50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}

        bootstrapURLKeys={{ key: 'AIzaSyAwaEfseFwAfRTc3WSYu2lMq_BETBl3ZNY' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}

        >

        </GoogleMapReact>
    </div>
  )
}

export default GoogleMaps