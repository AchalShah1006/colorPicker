import React, { useEffect } from "react"
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
} from "../../colordata"
import Navbar from "../../components/Navbar"
import Section from "../../components/Section"
import Footer from "../../components/Footer"
import axios from "axios"

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

function Homepage() {
  const classes = useStyles()

  useEffect(() => {
    axios("/homepage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((data) => console.log(data, "data"))
      .catch((error) => console.log(error))
  }, [])

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

export default Homepage
