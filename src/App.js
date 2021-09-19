import React, { useCallback, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import Navbar from "./components/Navbar"

import "./App.css"
import Section from "./containers/Section"

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    minWidth: "100%",
  },
  divline: {
    height: "64px",
  },
  headerText: {
    color: "#FFF",
    fontWeight: 600,
  },
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{ backgroundColor: "#121212" }}>
      <Navbar />
      <Container maxWidth="lg">
        <div className={classes.divline} />
        <Section colorType="Red" />
      </Container>
    </div>
  )
}

export default App
