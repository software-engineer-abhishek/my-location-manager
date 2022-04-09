import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Geocode from "react-geocode";

const GoogleMaps = withScriptjs(
  withGoogleMap((props) => {


    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    // console.log({ latitude, longitude });


    // useEffect(() => {
    //   Geocode.setApiKey("AIzaSyCjsoudnhJPEj1-T_HcCUHS-YjmnP65l6c");
    //   Geocode.setLanguage("en");
    //   Geocode.fromLatLng(latitude, longitude).then(
    //     (response) => {
    //       console.log("MY RES IS==>", response)
    //       const address = response.results[0].formatted_address;
    //       let city, state, country;
    //       for (
    //         let i = 0;
    //         i < response.results[0].address_components.length;
    //         i++
    //       ) {
    //         for (
    //           let j = 0;
    //           j < response.results[0].address_components[i].types.length;
    //           j++
    //         ) {
    //           switch (response.results[0].address_components[i].types[j]) {
    //             case "locality":
    //               city = response.results[0].address_components[i].long_name;
    //               break;
    //             case "administrative_area_level_1":
    //               state = response.results[0].address_components[i].long_name;
    //               break;
    //             case "country":
    //               country = response.results[0].address_components[i].long_name;
    //               break;
    //           }
    //         }
    //       }
    //       console.log(city, state, country);
    //       console.log(address);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // },[latitude, longitude]);

    useEffect(() => {

      props.callbackFromMaps({latitude, longitude})
     
    }, [latitude, longitude])

    useEffect(() => {

      console.log("props.latnlngprops.latnlng", props.latnlng)

      // props.latnlng
     
    }, [])
    

    const onMarkerDragEnd = (e) => {
      let newLet = e.latLng.lat();
      let newLng = e.latLng.lng();
      console.log({ newLet });
      setLatitude(newLet)
      setLongitude(newLng)
    };

    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.6304, lng: 77.2177 }}>
        {props.isMarkerShown && (
          <Marker
            draggable
            onDragEnd={onMarkerDragEnd}
            position={{ lat: props.latnlng.latitude, lng: props.latnlng.longitude}}
          >
            <InfoWindow>
              <div>Hi Info window from Abhishek</div>
            </InfoWindow>
          </Marker>
        )}
      </GoogleMap>
    );
  })
);

export default GoogleMaps;
