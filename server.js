require("dotenv").config();

const app = require("./app");
const connectDB = require("./src/db/mongoose");

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB and listening on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error("Mongoose connection error:", err);
    process.exit(1);
  });

require("./src/models/User");
require("./src/models/Item");
require("./src/models/Claim");
require("./src/models/Message");
