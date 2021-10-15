import React from "react"
import ColorCard from "../ColorCard"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { v4 as uuidv4 } from "uuid"

const useStyles = makeStyles({
  section: {
    padding: "3rem 1rem",
    margin: "auto",
  },
  headerText: {
    display: "none",
    color: "#FFF",
    fontWeight: 600,
    "@media(min-width: 600px)": {
      display: "block",
    },
  },
  grid: {
    justifyContent: "center",
  },
  cardRoot: {
    display: "flex",
    flexWrap: "wrap",
  },
})

function Section(props) {
  const { colorGroup, colors } = props
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <Typography variant="h5" className={classes.headerText}>
        {`Something ${colorGroup}?`}
      </Typography>
      <Grid container className={classes.grid}>
        <div className={classes.cardRoot}>
          {colors.map((color) => (
            <ColorCard key={uuidv4()} color={color} />
          ))}
        </div>
      </Grid>
    </div>
  )
}

export default Section
