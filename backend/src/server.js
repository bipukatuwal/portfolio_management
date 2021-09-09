const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const PORT = 5000;
const Buysell = require("../models/buysell");

const app = express();
const cors = require("cors");
/* const StockName = require("../models/stockname");
const TransactionType = require("../models/transactiontype"); */

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
/* app.post("/stockname", (req, res) => {
  StockName.create(req.body)
    .then((stockname) => {
      res.status(200).send(stockname);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
app.post("/transactiontype", (req, res) => {
  TransactionType.create(req.body)
    .then((transactiontype) => {
      res.status(200).send(transactiontype);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
}); */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
