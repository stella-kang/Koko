const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");

const app = express();
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);
