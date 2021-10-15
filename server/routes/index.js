const router = require("express").Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const authUserMiddleware = require("../middlewares/authUser")
require("dotenv").config()

const Users = mongoose.model("Users")

router.get("/homepage", authUserMiddleware, (req, res) => {
  const { user } = req
  res.send({ user })
})

router.post("/signin", (req, res) => {
  const { username, password } = req.body

  // If Username / Password is Empty
  if (!username || !password) {
    return res.status(200).json({ error: "Please Fill All The Fields" })
  }

  Users.findOne({ username }).then((savedUser) => {
    if (!savedUser) {
      return res.json({ error: "No username found" })
    }

    bcrypt.compare(password, savedUser.password, (error, valid) => {
      if (error) {
        return res.json({ error })
      }
      if (valid) {
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_KEY)
        return res
          .status(200)
          .json({ message: "Logged In Successfully", auth: true, token })
      } else {
        return res.json({ error: "Invalid credentials" })
      }
    })
  })
})

router.post("/signup", (req, res) => {
  const { username, password } = req.body

  // If Username / Password is Empty
  if (!username || !password) {
    return res.status(200).json({ error: "Please Fill All The Fields" })
  }

  Users.findOne({ username }).then((savedUser) => {
    if (savedUser) {
      return res.json({ error: "User already exists" })
    }

    bcrypt.hash(password, 14, (hashedPassword) => {
      const user = new Users({
        username,
        password: hashedPassword,
      })

      user
        .save()
        .then(() => res.send({ message: "User Created!" }))
        .catch((error) => res.send({ error: error }))
    })
  })
})

router.get("/logout", (req, res) => {
  delete req.user
  res.redirect("/signin")
})

module.exports = router
