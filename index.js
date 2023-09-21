const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mountainRoute = require("./Routes/mountains");

dotenv.config();

app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API running");
});
app.use("/api/mountains", mountainRoute);

const StartServer = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Mongo ok");
  app.listen(port, () => {
    console.log(`API listening on ${port}`);
  });
};

StartServer();
