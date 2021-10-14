require("dotenv").config()
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const Users = mongoose.model("Users")
// console.log(process.env.JWT_KEY)

const authUserMiddleware = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" })
  }
  const token = authorization.replace("Bearer ", "")
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" })
    } else {
      Users.findOne({ _id: payload.id })
        .select("username savedColors")
        .then((savedUser) => {
          req.user = savedUser
          next()
        })
        .catch((error) => res.status(401).json({ error }))
    }
  })
}

module.exports = authUserMiddleware
