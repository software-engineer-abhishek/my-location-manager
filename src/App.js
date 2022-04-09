import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LocationView from "./components/Location/LocationView";
import GoogleMaps from "./components/GoogleMaps/GoogleMaps";
import ExtraStuff from "./components/ExtraStuff/ExtraStuff";
import CustomizedSwitches from "./components/Switch/CustomSwitch";
import HotelsView from "./components/Hotels/HotelsView";
import {getRestaurantsDetail} from './api'

const App = () => {
  const [latnlng, setLatnlng] = useState({
    latitude: 28.6304,
    longitude: 77.2177,
  });

  const [screen, setScreen] = useState()
  const [title, setTitle] = useState('Location Manager')
  const [restaurentApiData,setRestaurentApiData] = useState()
  // console.log("Screenvalur is", screen)
  // console.log("restaurentApiData", restaurentApiData)
  

  const callbackFromMaps = (val) => {
    console.log("Val is", val);
    if (val !== null && val !== undefined) {
      setLatnlng(val);
    }
  };

  const callbackFromNavbar = (val) => {
    console.log("Val is", val);
    if (val !== null && val !== undefined) {
      setLatnlng(val);
    }
  };

  const callbackFromHotelView = (val) => {
    console.log("Val is callbackFromHotelView", val);
    if (val !== null && val !== undefined) {
      setLatnlng(val);
    }
  };

  const callbackFromSwitch = (val) => {
    console.log("Val is", val);
    if (val !== null && val !== undefined) {
      setScreen(val)
    }
  };



  useEffect(() => {
   if(!screen) {
    setTitle('Hotel Manager')
   } else setTitle('Location Manager')
  }, [screen])


  // API Call

  useEffect(() => {
  
   getRestaurantsDetail()
            .then((data)=>{
              setRestaurentApiData(data)
            })
   }, [])
  

  return (
    <>
      <CssBaseline />
      <NavBar callbackFromNavbar={callbackFromNavbar} title={title}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomizedSwitches callbackFromSwitch={callbackFromSwitch}/>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={2} mb={2}>
          <Grid item xs={5}>
            {screen ? <LocationView latnlng={latnlng} /> : <HotelsView 
            callbackFromHotelView={callbackFromHotelView}
            restaurentApiData={restaurentApiData} />}
            
          </Grid>
          <Grid item xs={7}>
            <GoogleMaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjsoudnhJPEj1-T_HcCUHS-YjmnP65l6c&v=3.exp&libraries=geometry"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `400px`, width: "90%" }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
              callbackFromMaps={callbackFromMaps}
              latnlng={latnlng}
            />
            {/* <GoogleMaps /> */}
          </Grid>
        </Grid>
      </Box>
      <ExtraStuff />
    </>
  );
};

export default App;
