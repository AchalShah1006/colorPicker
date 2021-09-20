import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    color: "#FFF",
    textAlign: "center",
    padding: "2rem",
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Typography
        style={{
          textAlign: "center",
          fontSize: "16px",
          marginTop: "1rem",
        }}
      >
        All Rights Reserved
      </Typography>
      <Typography style={{ textAlign: "center", fontSize: "16px" }}>
        Copyright &copy; <span style={{ color: "orange" }}> Achal Shah</span>
      </Typography>
    </footer>
  )
}

export default Footer
