const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Dotenv Config
dotenv.config();

// Mongodb Connection
connectDB();

// Rest Object
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/vl/user", require("./routes/userRoutes"));

// Port
const port = process.env.PORT || 8080;
// listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
