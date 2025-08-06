const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected to host: " + conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection failed: " + error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
