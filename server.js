const express = require("express");
const mongoose = require("mongoose");
const routes = require("./backend/routes");
const PORT = process.env.PORT || 9000;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Mongoose connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks_db", {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}!`);
});
