require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

// Express Config
app.use(cors())
app.use(express.json())
require("./models/users")

// MongoDb connection
mongoose.connect(MONGO_URL)

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
  console.log(err)
})

// Server routes
app.use("/", require("./routes"))

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
