const mongoose = require("mongoose")

const Users = mongoose.Schema({
  username: {
    type: String,
    required: "true",
  },
  password: {
    type: String,
    required: "true",
  },
  savedColors: {
    type: Array,
    required: "false",
  },
})

mongoose.model("Users", Users)
