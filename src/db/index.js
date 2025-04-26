const mongoose = require("mongoose");

const seedData = require("./seedData.js");

const connectDatabase = async () => {
  const db = await mongoose.connect("mongodb://mongodb:27017/dev");
  await console.log("db connected");
  if (process.env.NODE_ENV === "dev") await seedData();
  return db;
};

module.exports = { connectDatabase };
