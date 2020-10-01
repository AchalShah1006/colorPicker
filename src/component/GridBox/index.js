import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid, Snackbar } from '@material-ui/core';
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
  const [open, setOpen] = useState(false);  // set SnackBar open/close.
  const [clr, setClr] = useState();         // set colour value of OnClick event.
  
  const classes = useStyles();

  // Function To Save Colour Value To Clip-Board.
  const copyColour = (val) => {
    let copyTxt = document.createElement('textarea');
    copyTxt.innerText = val;
    document.body.appendChild(copyTxt)
    copyTxt.select();
    document.execCommand('copy');
    copyTxt.remove();
  }
  
  // To Close SnackBar
  const handleClose = (event, reason) => {
    setOpen(false);   // set SnackBar Close
  }

  const handleChange = (val) => {
    setClr(val);      // Set clr variable's value
    setOpen(true);    // set SnackBar Open
    copyColour(val);  // Call copyColour Function To save value to Clip-Board.
    document.getElementById('root').style.backgroundColor = val;  // Set Document's Background Colour.
  }
  return (
    <Card className={classes.root}> 
          {props.array.map((text, index)=>(
            <Grid 
            key={text} 
            item xs 
            className={classes.color} 
            style={{ backgroundColor: text  }} 
            onClick={key => {handleChange(text)}} 
            >
              <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert severity="success">
                  Copied {clr} !
                </Alert>
              </Snackbar>
            </Grid>
          ))}
          
    </Card>
  );
}