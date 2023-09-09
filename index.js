const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("/index.html", { root: __dirname + "/public" });
});

app.get("/about", (req, res) => {
  res.sendFile("/about.html", { root: __dirname + "/public" });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("/contact-me.html", { root: __dirname + "/public" });
});

app.use(function (req, res) {
  res.status(404).sendFile("/404.html", { root: __dirname + "/public" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
