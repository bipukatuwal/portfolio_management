const mongoose = require("mongoose");

const stocknameSchema = new mongoose.Schema({
  stockname: {
    type: String,
  },
});

const StockName = mongoose.model("StockName", stocknameSchema);

module.exports = StockName;
