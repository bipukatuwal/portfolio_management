const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const PORT = 5000;
const Buysell = require("../models/buysell");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", require("../routes/buysellRoutes"));

app.get("/", (req, res) => {
  res.send("WELCOME TO PORT FOLIO MANAGEMENT SERVER SIDE");
});

Buysell.find()
  .distinct("stockname")
  .then((c) => {
    console.log(c);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
