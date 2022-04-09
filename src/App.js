import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocationView from "./components/Location/LocationView";
import GoogleMaps from "./components/GoogleMaps/GoogleMaps";

const App = () => {

  const [latnlng, setLatnlng] = useState({latitude: 28.6304, longitude: 77.2177})

  const callbackFromMaps = (val) => {
    console.log("Val is", val)
    if (val !== null && val !== undefined) {
    setLatnlng(val)
    }
  }

  const callbackFromNavbar = (val) => {
    console.log("Val is", val)
    if (val !== null && val !== undefined ) {
      setLatnlng(val)
      }
      }
  return (
    <>
      <CssBaseline />
      <NavBar callbackFromNavbar={callbackFromNavbar}/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={2} mb={2} mr={1} ml={1}>
          <Grid item xs={4}>
            <LocationView latnlng={latnlng}/>
          </Grid>
          <Grid item xs={8}>
            <GoogleMaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjsoudnhJPEj1-T_HcCUHS-YjmnP65l6c&v=3.exp&libraries=geometry"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px`, width:'90%' }} />}
              mapElement={<div style={{ height: `100%` }} />}
              callbackFromMaps={callbackFromMaps}
              latnlng={latnlng}

            />
            {/* <GoogleMaps /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
