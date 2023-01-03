const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
  user_id:String,
  street:String,
  city:String,
  state:String,
  country:String,
  zip: String
})

module.exports = mongoose.model("addresses",addressSchema);