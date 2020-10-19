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
  divline: {
    height: '64px',
  },
}));

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: false,
  });
  const handleState = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <Navbar handle={handleState} state={state} />
      <Box>
        <div className={classes.divline} />
        <Grid container className={classes.root}>
          {data.colour.map((text) => (
            <GridBox key={text} array={text} state={state} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
