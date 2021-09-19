import React from "react"
import { Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
}))

const SearchAppBar = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar style={{ backgroundColor: "#121212", color: "#FFF" }}>
        <Typography className={classes.title} variant="h6" noWrap>
          Colour Picker
        </Typography>
      </Toolbar>
    </div>
  )
}

export default React.memo(SearchAppBar)
