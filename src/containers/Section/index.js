import React from "react"
import ColorCard from "../../components/ColorCard"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { v4 as uuidv4 } from "uuid"

const useStyles = makeStyles({
  section: {
    padding: "3rem 1rem",
    margin: "auto",
  },
  headerText: {
    color: "#FFF",
    fontWeight: 600,
  },
})

function Section(props) {
  const { colorGroup, colors } = props
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <Typography variant="h5" display="block" className={classes.headerText}>
        {`Something ${colorGroup}?`}
      </Typography>
      <Grid container>
        {colors.map((color) => (
          <ColorCard key={uuidv4()} color={color} />
        ))}
      </Grid>
    </div>
  )
}

export default Section
