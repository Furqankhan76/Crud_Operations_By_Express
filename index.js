const express = require("express");
const mongoose = require("mongoose");
// const task = require("./models/taskmodel.js");
const tasktroute = require("./routes/taskroute.js");
const categoryRoute = require("./routes/categoryroutes.js")
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/tasks", tasktroute)
app.use("/api/categories", categoryRoute);





//simple localhost testing

app.get("/", function (req, res) {
  res.send("Working");
});




mongoose
  .connect(
    "mongodb+srv://furqankhan:furqankhan123@backenddb.jk7nw.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on 3000");
    });
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("connection failed");
  });
