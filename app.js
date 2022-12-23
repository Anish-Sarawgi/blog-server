const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const articleRoutes = require("./api/articleRoutes");
const authRoutes = require("./api/authRoutes");
// const userRoutes = require('./api/userRoutes.js');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 7000;

const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use('/api/user', userRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/auth", authRoutes);
