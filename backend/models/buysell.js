const mongoose = require("mongoose");

const buysellSchema = {
  stockname: {
    type: String,
  },
  transtype: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  transdate: {
    type: Date,
  },
};

const Buysell = mongoose.model("Buysell", buysellSchema);

module.exports = Buysell;
