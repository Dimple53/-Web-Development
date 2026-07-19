const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ig/:username", (req, res) => {
  const followers = ["john_doe", "jane_smith", "alex_123"];
  let { username } = req.params;
  res.render("instagram", { username, followers});
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/rolldice", (req, res) => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { num: randomNumber });
});


app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});
