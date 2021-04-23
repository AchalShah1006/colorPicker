import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Navbar from "./component/Navbar";
import GridBox from "./component/GridBox";
import data from "./color.json";
import "./App.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
  },
  divline: {
    height: '64px',
  },
});

function App() {
  const classes = useStyles();
  const [bgcolor, setBgColor] = useState('#FFF'); 
  const [navColor, setNavColor] = useState('3F51B5');
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <Navbar 
       checked={checked} 
       navColor={navColor}
       setBgColor={val => setBgColor(val)}
       setChecked={val => setChecked(val)}
       setNavColor={val => setNavColor(val)}
      />
      <Box>
        <div className={classes.divline} />
        <Grid container className={classes.root}>
          {data.colour.map(array => (
            <GridBox
              key={array}
              array={array}
              checked={checked} 
              bgcolor={bgcolor}
              setBgColor={val => setBgColor(val)}
              setNavColor={val => setNavColor(val)}
            />  
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
