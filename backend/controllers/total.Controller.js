const express = require("express");
const mongoose = require("mongoose");
const Buysell = require("../models/buysell");

const total = function (req, res) {
  Buysell.aggregate([
    {
      $match: {
        id: 1,
      },
    },

    {
      $project: {
        id: 1,
        total: { $add: ["$quantity", "$price"] },
      },
    },
  ]);
};

module.exports = total;
