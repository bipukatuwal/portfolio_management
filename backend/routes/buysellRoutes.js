const express = require("express");
const total = require("../controllers/total.Controller");
const router = express.Router();
const Buysell = require("../models/buysell");
const StockName = require("../models/stockname");

router.route("/create").post((req, res) => {
  const stockname = req.body.stockname;
  const transtype = req.body.transtype;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const transdate = req.body.transdate;
  const newBuysell = new Buysell({
    stockname,
    transtype,
    quantity,
    price,
    transdate,
  });
  newBuysell.save();
});

router.route("/overall").get((req, res) => {
  Buysell.find().then((foundOverall) => res.json(foundOverall));
});

router.route("/stockname").get((req, res) => {
  StockName.find().then((foundStockname) => res.json(foundStockname));
});

router.route("/total").get(total);

module.exports = router;
