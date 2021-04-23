import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    height: "170px",
    backgroundColor: 'transparent',
    width: "80%",
    margin: "1rem auto",
    "@media(min-width: 400px)": {
      minWidth: "300px",
      height: "200px",
      width: "auto",
    },
    "@media(min-width: 800px)": {
      minWidth: "400px",
      height: "200px",
      width: "auto",
    },
  },
  color: {
    width: "33.33%",
    display: "inline-block",
    height: "33.33%",
    textAlign: "center",
  },
  typo: {
    color: "white",
  },
});

export default function GridBox({
  array,
  checked,
  bgcolor,
  setBgColor,
  setNavColor
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function To Save Colour Value To Clip-Board.
  const copyColour = (val) => {
    let copyTxt = document.createElement("textarea");
    copyTxt.innerText = val;
    document.body.appendChild(copyTxt);
    copyTxt.select();
    document.execCommand("copy");
    copyTxt.remove();
  };

  const handleClick = (val) => {
    checked ? setNavColor(val) : setBgColor(val)
    setOpen(true);
    copyColour(val);
  };

  return (
    <Card className={classes.root}>
      {array.map(text => (
        <Grid
          key={text}
          item
          xs
          className={classes.color}
          style={{ backgroundColor: text }}
          onClick={() => handleClick(text)}
        >
          <Snackbar open={open} autoHideDuration={200} onClose={handleClose}>
            <Alert severity="success">{bgcolor} Copied!</Alert>
          </Snackbar>
        </Grid>
      ))}
    </Card>
  );
}
