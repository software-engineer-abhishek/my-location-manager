import React,{useState, useEffect} from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo192 from "../../assets/logo192.png";
import { style } from "@mui/system";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../NavBar/NavBar.css";
import InputAdornment from '@mui/material//InputAdornment';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const [places, setPlaces] = useState([
    { label: "Delhi", latitude: 28.6304, longitude: 77.2177 },
    { label: "Ghaziabad", latitude: 28.6692, longitude: 77.4538 },
    { label: "Gurgaon", latitude: 28.4595, longitude: 77.0266 },
    { label: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
    { label: "Mumbai", latitude: 19.076, longitude: 72.8777 },
    { label: "Switzerland", latitude: 46.8182, longitude: 8.2275 },
  ]);

  const [selectedPlace, setSelectedPlace] = useState(null);
  // console.log({ selectedPlace });

  // const searchClicked = () => {
  //   console.log("Search is clicked");
  // };

  useEffect(() => {
   props.callbackFromNavbar(selectedPlace)
  }, [selectedPlace])
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={logo192} style={{ width: 30, height: 30 }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Location Manager
          </Typography>

          <Autocomplete
            disablePortal
            id="Places-Name"
            options={places}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Search Places"
              InputProps={{...params.InputProps,
                startAdornment: ( <InputAdornment position="start"> <SearchIcon /> 
                </InputAdornment> ),
                disableUnderline: true }}
              />
            )}
            className="Places-Name"
            value={selectedPlace}
            onChange={(event, newValue) => setSelectedPlace(newValue)}
          />

          {/* <Search onClick={searchClicked}>
            <SearchIconWrapper>
              <SearchIcon />
             
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Places"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
