const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "dist")));
app.use("/mail", require('./routes/mail.js'))
app.use("/pdf", require('./routes/pdf.js'))

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "portfolio",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// app.use("/auth", require("./models/user.js"));
// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "dist")))

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
  
  app.listen(9000, () => {
    console.log("The server is running on port 9000");
  });
