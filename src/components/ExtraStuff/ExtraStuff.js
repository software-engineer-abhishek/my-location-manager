import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ExtraStuff = () => {

    const [likeNumbers, setLikeNumbers] = useState(0)

    useEffect(()=>{
        setLikeNumbers(parseInt(localStorage.getItem('Hearts')))
    },[])

    useEffect(()=>{
        localStorage.setItem('Hearts', likeNumbers.toString());
    },[likeNumbers])


const heartClicked = () => {
console.log("Heart is clicked")
setLikeNumbers(likeNumbers + 1)
}

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Typography style={{ textAlign: "center" }}>
          {" "}
          Developed and Designed by : Abhishek
        </Typography>
        <AccessibilityNewIcon color="primary" />
      </div>
      <div>
        <Typography style={{ textAlign: "center" }}>
          Liked It? Click on the Heart below.
        </Typography>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <FavoriteIcon
          color="primary"
          fontSize="large"
          style={{ marginRight:20 }}
          onClick={heartClicked}
        />
        <Typography style={{ textAlign: "center" }}>
          {likeNumbers} Likes
        </Typography>
        </div>
      </div>
    </>
  );
};

export default ExtraStuff;
