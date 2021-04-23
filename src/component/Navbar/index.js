import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    margin: "auto",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default function SearchAppBar({
  checked,
  navColor,
  setBgColor,
  setChecked,
  setNavColor,
}) {
  // console.log('abc',state);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        id="appBar"
        style={{ backgroundColor: navColor }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Colour Picker
          </Typography>
          <IconButton>
            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
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
              onChange={(e) => {
                checked ? setNavColor(e.target.value) : setBgColor(e.target.value)
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
