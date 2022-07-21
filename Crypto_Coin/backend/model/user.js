const mongoose = require("mongoose");

const portfolioSchema =  new mongoose.Schema({
  quantity: {type: String},
  price_per_coin: {type: String},
  fee: {type: String},
  date_buyed: {type: String},
}, { timestamps: true })

const profileSchema = new mongoose.Schema({
  first_name: {type: String},
  last_name: {type: String},
  birdth_date: {type: String},
  country: {type: String},
}, { _id : false })

const coinSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true}, // empty string NONO!
  coin_name: { type: String },
  portfolio: [portfolioSchema]
}, { _id : false });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true }, // empty string NONO!
  password: { type: String },
  providers: {
    google: { type: String, sparse: true, unique: true },
    github: { type: String, sparse: true, unique: true },
    // login_form_password: { type: String, sparse: true, unique: true },
  },
  coins: [coinSchema], // empty list is default?
  profile: [profileSchema],
});

const User = mongoose.model("user", userSchema);
module.exports = User;