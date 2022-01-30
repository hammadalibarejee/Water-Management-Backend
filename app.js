const express = require("express");
const Body = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/routes");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(Body.json());
app.use(morgan("short"));
app.use("/api", router);

module.exports = app;
