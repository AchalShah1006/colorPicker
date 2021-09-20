import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Card, Snackbar } from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { CopyToClipboard } from "react-copy-to-clipboard"

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
    border: "1px solid #FFF",
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

  const handleClick = (val) => {
    setSaved(true)
  }

  return (
    <Box className={classes.root}>
      <CopyToClipboard text={color} onCopy={handleClick}>
        <Card className={classes.card} style={{ backgroundColor: color }} />
      </CopyToClipboard>

      {/* Color Hex Text */}
      <div className={classes.fontColor}>{color.toUpperCase()}</div>

      {/* Snackbar Success message */}
      <Snackbar open={saved} autoHideDuration={500} onClose={handleClose}>
        <Alert severity="success">Copied! {color.toUpperCase()}</Alert>
      </Snackbar>
    </Box>
  )
}

export default React.memo(ColorCard)
