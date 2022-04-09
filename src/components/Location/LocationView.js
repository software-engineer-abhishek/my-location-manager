import React from 'react'
import Typography from '@mui/material/Typography';


const LocationView = (props) => {
  // console.log(props)
  return (

    <div style={{marginLeft:20}}>
    <Typography variant="h5" mt={3}>Latitude : {props.latnlng?.latitude}</Typography>
    <Typography variant="h5" mt={3}>Longitude : {props.latnlng?.longitude}</Typography>
    <Typography variant="h5" mt={3}>Area : {}</Typography>
    <Typography variant="h5" mt={3}>City : {}</Typography>
    <Typography variant="h5" mt={3}>State : {}</Typography>
    <Typography variant="h5" mt={3}>Country : {}</Typography>
    </div>
  )
}

export default LocationView