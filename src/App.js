import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import {
  RED_COLOR,
  BLUE_COLOR,
  GREEN_COLOR,
  YELLOW_COLOR,
  PURPLE_COLOR,
  BLACK_COLOR,
  DEFAULT_COLOR,
} from "./colordata"
import Navbar from "./components/Navbar"
import Section from "./containers/Section"

import "./App.css"
import Footer from "./components/Footer"

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
        <Section colorGroup="Red" colors={RED_COLOR} />
        <Section colorGroup="Blue" colors={BLUE_COLOR} />
        <Section colorGroup="Green" colors={GREEN_COLOR} />
        <Section colorGroup="Yellow" colors={YELLOW_COLOR} />
        <Section colorGroup="Purple" colors={PURPLE_COLOR} />
        <Section colorGroup="Black" colors={BLACK_COLOR} />
        <Section colorGroup="Defaults" colors={DEFAULT_COLOR} />
      </Container>
      <Footer />
    </div>
  )
}

export default App
