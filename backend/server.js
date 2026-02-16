const dotenv = require("dotenv").config();
const express = require("express");
const { sequelize } = require("./config/db");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorMiddleware");
const path = require("path");

const userRoutes = require("./routes/userRoutes");

const crypto = require("crypto");
const fs = require("fs");

const app = express();
// Middlewares

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//Error Middleware
app.use(errorHandler);

// Routes Middleware
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL Connected Successfully");

    // Sync models (optional)
    return sequelize.sync(); // or { alter: true }
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MySQL Connection Error:", err);
  });
