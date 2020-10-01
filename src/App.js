import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Navbar from "./component/Navbar";
import GridBox from "./component/GridBox";
import data from "./color.json";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box>
        <Grid container className={classes.root}>
          {data.colour.map((text) => (
            <GridBox key={text} array={text} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
