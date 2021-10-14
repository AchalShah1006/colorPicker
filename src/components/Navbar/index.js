import React from "react"
import {
  Toolbar,
  Typography,
  // InputBase,
  Link,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "block",
    margin: "auto",
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // inputRoot: {
  //   color: "inherit",
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     width: "12ch",
  //     "&:focus": {
  //       width: "20ch",
  //     },
  //   },
  // },
}))

const SearchAppBar = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar style={{ backgroundColor: "#121212", color: "#FFF" }}>
        <Typography className={classes.title} variant="h4" noWrap>
          UI Color Picker
        </Typography>
        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div> */}
        <Link color="primary" href="/signin">
          Login
        </Link>
        <Link color="primary" href="/profile">
          Profile
        </Link>
      </Toolbar>
    </div>
  )
}

export default React.memo(SearchAppBar)
