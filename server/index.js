const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://muratcanpayir:Password123@cluster0.h1zs0.mongodb.net/merndemo?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("Server Runs Perfectly!");
});
