import React from "react"
import ColorCard from "../../components/ColorCard"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {
  RED_COLOR,
  BLUE_COLOR,
  GREEN_COLOR,
  BLACK_COLOR,
  YELLOW_COLOR,
  PURPLE_COLOR,
  DEFAULT_COLOR,
} from "../../colordata"
import { v4 as uuidv4 } from "uuid"

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

function Section(props) {
  const { colorType } = props
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h5" display="block" className={classes.headerText}>
        {`Something ${colorType}?`}
      </Typography>
      <Grid container>
        {RED_COLOR.map((color) => (
          <ColorCard key={uuidv4()} color={color} />
        ))}
      </Grid>
    </div>
  )
}

export default Section
