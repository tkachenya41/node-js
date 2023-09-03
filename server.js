const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const postApiRoutes = require("./routes/api-post-routes");
const postRoutes = require("./routes/post-routes");
const contactRoutes = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");

app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Listening port ${process.env.PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.get(["/", "/index.html"], (req, res) => {
  const title = "Home page";

  res.render(createPath("index"), { title });
});

app.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = "Error page";
  res.status(404).render(createPath("error"), { title });
});
