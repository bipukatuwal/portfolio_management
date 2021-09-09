const express = require("express");
const mongoose = require("mongoose");

const Buysell = require("../models/buysell");

Buysell.aggregate(
  {
    $match: {
      _id: "613781d56d049746b0ae4f21",
    },
  },

  {
    $project: {
      _id: "613781d56d049746b0ae4f21",
      total: { $add: ["$quantity", "$price"] },
    },
  }
);
