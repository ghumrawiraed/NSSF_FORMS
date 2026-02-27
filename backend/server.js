const dotenv = require("dotenv").config();
const express = require("express");
const { sequelize } = require("./config/db");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorMiddleware");
const path = require("path");

const userRoutes          = require("./routes/userRoutes");
const employeeRoutes      = require("./routes/employeeRoutes");
const baraaRoutes         = require("./routes/baraaRoutes");
const contractRoutes      = require("./routes/contractRoutes");
const establishmentRoutes = require("./routes/establishmentRoutes");
const leaveRoutes         = require("./routes/leaveRoutes");
const ordersRoutes        = require("./routes/ordersRoutes");
const regLetterRoutes     = require("./routes/regLetterRoutes");
const regRequestRoutes    = require("./routes/regRequestRoutes");
const tahkikFatherRoutes  = require("./routes/tahkikFatherRoutes");
const tahkikZawjRoutes    = require("./routes/tahkikZawjRoutes");
const tajdidTahkikRoutes  = require("./routes/tajdidTahkikRoutes");
const tasfiyaRoutes       = require("./routes/tasfiyaRoutes");
const tasreehMostafeedRoutes = require("./routes/tasreehMostafeedRoutes");
const tasreehRoutes       = require("./routes/tasreehRoutes");
const toConcernRoutes     = require("./routes/toConcernRoutes");
const wifeCertificateRoutes  = require("./routes/wifeCertificateRoutes");
const PDFroute = require("./routes/PDFroute");
const crypto = require("crypto");
const fs = require("fs");

const app = express();
// Middlewares

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//Error Middleware
app.use(errorHandler);

// Routes Middleware
app.use("/api/reports", PDFroute);
app.use("/api/users", userRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/baraa", baraaRoutes);
app.use("/api/contract", contractRoutes);
app.use("/api/ta7kikZawj", tahkikZawjRoutes);
app.use("/api/tajdidTa7kik", tajdidTahkikRoutes);
app.use("/api/tasfiya", tasfiyaRoutes);
app.use("/api/mostafeed", tasreehMostafeedRoutes);
app.use("/api/tasree7", tasreehRoutes);
app.use("/api/concern", toConcernRoutes);
app.use("/api/wifecert", wifeCertificateRoutes);
app.use("/api/establishment", establishmentRoutes);
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
