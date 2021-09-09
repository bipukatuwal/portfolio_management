const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/portfolio_db`, {});
    console.log("Database connected successfully !!! ");
  } catch (err) {
    console.log("Failed to connect database ", err);
  }
};

connectDB();
