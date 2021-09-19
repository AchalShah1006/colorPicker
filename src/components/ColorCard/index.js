import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Card, Snackbar } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles({
  root: {
    margin: "1rem",
  },
  card: {
    height: "170px",
    backgroundColor: "transparent",
    width: 150,
    borderRadius: "10px",
  },
  fontColor: {
    color: "#FFF",
    fontWeight: 600,
    textAlign: "center",
    marginTop: "0.5rem",
  },
})

const ColorCard = (props) => {
  const { color } = props
  const [saved, setSaved] = useState(false)
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setSaved(false)
  }

  // Function To Save Colour Value To Clip-Board.
  const copyColour = (val) => {
    let copyTxt = document.createElement("textarea")
    copyTxt.innerText = val
    document.body.appendChild(copyTxt)
    copyTxt.select()
    document.execCommand("copy")
    copyTxt.remove()
  }

  const handleClick = (val) => {
    setSaved(true)
    copyColour(val)
  }

  return (
    <Box className={classes.root}>
      <Card
        className={classes.card}
        style={{ backgroundColor: color }}
        onClick={() => handleClick(color)}
      />
      <div className={classes.fontColor}>{color.toUpperCase()}</div>
      <Snackbar open={saved} autoHideDuration={500} onClose={handleClose}>
        <Alert severity="success">{color} Copied!</Alert>
      </Snackbar>
    </Box>
  )
}

export default React.memo(ColorCard)
