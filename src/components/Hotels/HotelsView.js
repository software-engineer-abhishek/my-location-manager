import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const HotelsView = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(props.restaurentApiData);
  }, [props.restaurentApiData]);

  const hotelMap = (hotelname) => {
    console.log("Hotel Map", hotelname)
    props.callbackFromHotelView(hotelname)
  }

  return (
    <>
    <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Typography variant="h5">Hotel List</Typography>
      </div>
      <div style={{ marginTop:20, marginLeft: 30, height: `350px`,overflowY: 'scroll' }}>
        
        {data?.map((item) => {
          {
            console.log("Hotel Item is", item);
          }
          return (

            <Card sx={{ minWidth: 275, mb:4 }}>
              <CardContent>

                  <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>

                  <div>
                  
              <img
              src={item.photo?.images.medium.url}
              style={{width:160, height:130, marginRight:20}}
              />
              </div>
                  <div>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Rating : {item.rating}
                </Typography>
                <Typography variant="body2">
                  Address : {item.address}
                </Typography>
                </div>
                </div>
              </CardContent>
              <CardActions>
                <Button onClick={()=>hotelMap({latitude:parseFloat(item.latitude), longitude:parseFloat(item.longitude)})} size="small">View On Map</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default HotelsView;
