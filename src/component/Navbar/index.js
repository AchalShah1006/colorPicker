import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    margin: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  // console.log('abc',state);
  const classes = useStyles();

  const handleChange = (val) => {
    if(val === ''){
        document.getElementById('appBar').style.backgroundColor = '#3f51b5';
        document.getElementById('root').style.backgroundColor = '#FFF';
    }
    else{ 
    if(props.state.checked === true){
      document.getElementById('appBar').style.backgroundColor = val;
    }
    else{
      document.getElementById('root').style.backgroundColor = val;
    }
  }
  }
 
  return (
    <div className={classes.root}>
      <AppBar position="fixed" id="appBar">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Colour Picker
          </Typography>
         
          <IconButton
            style={{ color: "white" }}
            onClick={(key) => {
              handleChange('');
            }}
          >
            <RotateLeftIcon />
          </IconButton>
          <IconButton>
          <Switch
              checked={props.state.checked}
              onChange={props.handle}
              name="checked"
              inputProps={{
                "aria-label": "secondary checkbox",
              }}
            />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="ex: black or #111"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(key) => {
                handleChange(key.target.value);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
