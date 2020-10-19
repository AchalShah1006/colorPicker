import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    height: '170px',
    width: '80%',
    margin: '1rem auto',
    '@media(min-width: 400px)': {
      minWidth: '300px',
      height: '200px',
      width: 'auto',
    },
    '@media(min-width: 800px)': {
      minWidth: '400px',
      height: '200px',
      width: 'auto',
    },
  },
  color: {
    width: '33.33%',
    display: 'inline-block',
    height: '33.33%',
    textAlign: 'center',
  },
  typo: {
    color: 'white',
  },
});


export default function GridBox(props) {

  const [color, setColor] = useState();         // set colour value of OnClick event.
  // console.log('xyz',props.state);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  // Function To Save Colour Value To Clip-Board.
  const copyColour = (val) => {
    let copyTxt = document.createElement('textarea');
    copyTxt.innerText = val;
    document.body.appendChild(copyTxt)
    copyTxt.select();
    document.execCommand('copy');
    copyTxt.remove();
  };

  const handleChange = (val) => {
    setColor(val);      // Set clr variable's value
    setOpen(true);
    copyColour(val);  // Call copyColour Function To save value to Clip-Board.
    if(props.state.checked === true){
      document.getElementById('appBar').style.backgroundColor = val;  // Set Document's Background Colour.
    }
    else{
      document.getElementById('root').style.backgroundColor = val;  // Set Document's Background Colour.
    }
  };

  return (
    <Card className={classes.root}>
      {props.array.map((text, index) => (
        <Grid
          key={text}
          item
          xs
          className={classes.color}
          style={{ backgroundColor: text }}
          onClick={(key) => {
            handleChange(text);
          }}
        >
          <Snackbar open={open} autoHideDuration={200} onClose={handleClose}>
        <Alert severity="success">
          {color} Copied!
        </Alert>
      </Snackbar>
        </Grid>
      ))}
    </Card>
  );
}