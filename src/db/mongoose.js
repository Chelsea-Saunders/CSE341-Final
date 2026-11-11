const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to database: ${mongoose.connection.name}`);
  } catch (err) {
    console.error("Mongoose connection error:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
