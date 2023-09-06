const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const newLocal = require('custom-env')
newLocal.env(process.env.NODE_ENV, './config');
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './client')));
app.use('/api', require("./routes/index"));
app.listen(process.env.PORT,()=>console.log(`Listening on port ${process.env.PORT}`));