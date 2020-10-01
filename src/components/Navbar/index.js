import React from "react"
import {
  Toolbar,
  Typography,
  // , Breadcrumbs, Link
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
}))

const SearchAppBar = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar style={{ backgroundColor: "#121212", color: "#FFF" }}>
        <Typography className={classes.title} variant="h4" noWrap>
          UI Color Picker
        </Typography>
        {/* <Breadcrumbs aria-label="breadcrumb" style={{ color: "#FFF" }}>
          <Link color="primary" href="/">
            Login
          </Link>
          <Link color="primary" href="/getting-started/installation/">
            Sign Up
          </Link>
        </Breadcrumbs> */}
      </Toolbar>
    </div>
  )
}

export default React.memo(SearchAppBar)
