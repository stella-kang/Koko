const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const reflections = require("./routes/api/reflections");

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/users/:userId/reflections', reflections)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
