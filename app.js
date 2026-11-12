const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const storeClass = MongoStore.default || MongoStore;
const swaggerui = require("swagger-ui-express");

const swaggerDocument = require("./swagger-output.json");
//const passport = require('./src/config/passport');
const routes = require("./src/routes");
const cors = require("cors");

const app = express();

// BODY PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: storeClass.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  }),
);

//PASSPORT MIDDLEWARE
//app.use(passport.initialize());
//app.use(passport.session());

// SWAGGER
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

// Routes
// app.use("/", routes);

// 404 ERROR HANDLER
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

module.exports = app;
